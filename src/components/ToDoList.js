import React from "react";
import classes from "./ToDoList.module.css";
import { useContext } from "react";
import ToDosContext from "../store/ToDosContext";
import ToDoItem from "./ToDoItem";
function ToDoList() {
  const ctx = useContext(ToDosContext);
  const [toDosList, setToDosList] = React.useState(ctx.toDoList);
  console.log("ToDo List component rerun");
  return (
    <div className={classes.toDoList}>
      {toDosList.length === 0 ? (
        <span>To Do List is Empty</span>
      ) : (
        <ul>
          {toDosList.map((item) => (
            <ToDoItem
              key={item.id}
              onClick={() => {
                ctx.markAsDone(item.id);
                setToDosList(ctx.toDoList.map((item) => item));
                console.log("state", toDosList);
                console.log("ctx", ctx.toDoList);
                return;
              }}
              toDoData={item}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
export default ToDoList;
