import React from "react";
import classes from "./ToDoList.module.css";
import { useContext } from "react";
import ToDosContext from "../store/ToDosContext";
function ToDoList() {
  const ctx = useContext(ToDosContext);
  const [toDosList, setToDosList] = React.useState(ctx.toDoList);
  console.log("ToDo component rerun");
  return (
    <div className={classes.toDoList}>
      {toDosList.length === 0 ? (
        <span>To Do List is Empty</span>
      ) : (
        <ul>
          {toDosList.map((item) => (
            <li
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ToDoList;
