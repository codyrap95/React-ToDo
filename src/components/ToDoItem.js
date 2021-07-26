import React from "react";
import classes from "./ToDoItem.module.css";
// {new Date(item.timestamp).toLocaleTimeString()}; //
export default function ToDoItem(props) {
  const item = props.toDoData;
  console.log(classes);
  return (
    <li className={`${classes.toDoItem}`}>
      <input
        className={classes.toDoItem__checkbox}
        type="checkbox"
        name="done"
        id="done"
        onClick={props.onDone}
      />
      <span
        className={`${classes.toDoItem__content} ${
          !item.done ? "" : classes.done
        }`}
      >
        {item.content}{" "}
      </span>
      <button className={classes.toDoItem__button}>...</button>
    </li>
  );
}
