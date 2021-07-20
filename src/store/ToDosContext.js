import React, { useState } from "react";

let toDos = {};

export const ToDosContextProvider = (props) => {
  toDos = {
    toDoList: [],
    deleteToDo: function (toDoId) {
      this.toDoList = this.toDoList.filter((item) => item.id !== toDoId);
    },
    markAsDone: function (toDoId) {
      this.toDoList.forEach((item) => {
        if (item.id === toDoId) item.done = !item.done;
      });
      console.log("din context", this.toDoList);
    },
    createToDo: function (content) {
      this.toDoList.push({
        id: Date.now() / Math.random(),
        content: content,
        timestamp: new Date().getTime(),
        done: false,
      });
      setToDoState({ ...this });
    },
  };
  const [toDoState, setToDoState] = useState(toDos);
  return (
    <ToDosContext.Provider value={toDoState}>
      {props.children}
    </ToDosContext.Provider>
  );
};
const ToDosContext = React.createContext(toDos);
export default ToDosContext;
