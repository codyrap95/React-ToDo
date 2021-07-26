import React, { useContext, useRef } from "react";
import ToDosContext from "../../store/ToDosContext";
import classes from "./AddToDo.module.css";

export default function AddToDo() {
  const ctx = useContext(ToDosContext);
  const toDoContentRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    ctx.createToDo(toDoContentRef.current.value);
    toDoContentRef.current.value = "";
  };
  return (
    <form className={classes.form}>
      <textarea
        name="toDoContent"
        id="toDoContent"
        cols="50"
        rows="10"
        ref={toDoContentRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") submitHandler(e);
        }}
      ></textarea>
      <button type="submit" onClick={submitHandler}>
        Add item
      </button>
    </form>
  );
}
