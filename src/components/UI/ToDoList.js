import React from "react";
import classes from "./ToDoList.module.css";
import { useContext } from "react";
import ToDosContext from "../../store/ToDosContext";
function ToDoList() {
  const ctx = useContext(ToDosContext);
  ctx.createToDo("aaa");

  return (
    <section className={classes.ToDoList}>
      {ctx.toDoList.map((item) => (
        <p
          onClick={() => {
            item.done = true;
          }}
          key={item.id}
        >
          {item.content} {new Date().toLocaleTimeString(item.timestamp)}{" "}
          {item.done.toString()}
        </p>
      ))}
    </section>
  );
}
export default ToDoList;
