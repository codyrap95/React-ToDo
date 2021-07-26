import React from "react";
import classes from "./ToDoList.module.css";
import { useContext } from "react";
import ToDosContext from "../store/ToDosContext";
import ToDoItem from "./ToDoItem";
function ToDoList() {
  const ctx = useContext(ToDosContext);
  const [toDosList, setToDosList] = React.useState(ctx.toDoList);
  if (toDosList.length !== ctx.toDoList.length) setToDosList(ctx.toDoList); // resets the toDosList state if the current state's length is not equal to the one in context
  return (
    <div className={classes.toDoList}>
      {toDosList.length === 0 ? (
        <span>To Do List is Empty</span>
      ) : (
        <ul>
          {toDosList.map((item) => (
            <ToDoItem
              key={item.id}
              onDone={() => {
                ctx.markAsDone(item.id);
                setToDosList(ctx.toDoList.map((item) => item)); // not the best implementation but triggers component re-render
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
