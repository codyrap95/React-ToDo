import React from "react";
import classes from "./ToDoList.module.css";
import { useContext } from "react";
import ToDosContext from "../../store/ToDosContext";
function ToDoList() {
  const ctx = useContext(ToDosContext);
  const [toDosList, setToDosList] = React.useState(ctx.toDoList);
  console.log("component rerun");
  return (
    <section className={classes.ToDoList}>
      <button
        onClick={() => {
          ctx.createToDo("New ToDo");
          setToDosList(ctx.toDoList.map((item) => item));
        }}
      >
        Add item
      </button>
      {toDosList.map((item) => (
        <p
          onClick={() => {
            ctx.markAsDone(item.id);
            setToDosList(ctx.toDoList.map((item) => item));
            console.log("state", toDosList);
            console.log("ctx", ctx.toDoList);
          }}
          key={item.id}
        >
          {item.content} {new Date(item.timestamp).toLocaleTimeString()}{" "}
          {item.done.toString()}
        </p>
      ))}
    </section>
  );
}
export default ToDoList;
