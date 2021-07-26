import React from "react";

export default function ToDoItem(props) {
  const item = props.toDoData;
  return (
    <li onClick={props.onClick}>
      {item.content} {new Date(item.timestamp).toLocaleTimeString()}{" "}
      {item.done.toString()}
    </li>
  );
}
