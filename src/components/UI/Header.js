import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <h1>Daily To-Do App</h1>
      <button
        onClick={() => {
          alert("Login functionality is not available yet");
        }}
      >
        Log In
      </button>
    </header>
  );
}
