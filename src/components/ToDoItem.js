import React from "react";
import classes from "./ToDoItem.module.css";

export default function ToDoItem(props) {
  const item = props.toDoData;
  console.log(classes);
  return (
    <li
      className={`${classes.toDoItem} ${!item.done ? "" : classes.crossed}`}
      onClick={props.onClick}
    >
      {item.content} {new Date(item.timestamp).toLocaleTimeString()}{" "}
      {item.done.toString()}
    </li>
  );
}
