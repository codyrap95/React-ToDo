import React, { useContext, useRef } from "react";
import ToDosContext from "../store/ToDosContext";
import classes from "./AddToDo.module.css";

export default function AddToDo() {
  const ctx = useContext(ToDosContext);
  const toDoContentRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    if (toDoContentRef.current.value.trim().length === 0)
      return alert("To Do cannot be empty");
    ctx.createToDo(toDoContentRef.current.value);
    toDoContentRef.current.value = "";
    console.log("clicked submit");
  };
  const maxLength = 65;
  return (
    <form className={classes.form}>
      <label htmlFor="toDoContent" aria-label="Add ToDo Item"></label>
      <textarea
        name="toDoContent"
        id="toDoContent"
        rows="2"
        maxLength={maxLength.toString()}
        ref={toDoContentRef}
        onChange={(e) => {
          if (e.target.value.length === 65)
            alert(
              "To-do content can't be longer than " + maxLength + " characters."
            );
          return;
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") submitHandler(e);
          return;
        }}
      ></textarea>
      <button
        className={classes.submitBtn}
        type="submit"
        onClick={submitHandler}
      >
        Add&nbsp;item
      </button>
    </form>
  );
}
