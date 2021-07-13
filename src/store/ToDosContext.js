import React from "react";

const toDos = {
  toDoList: [],
  deleteToDo: function (toDoId) {
    this.toDoList = this.toDoList.filter((item) => item.id !== toDoId);
  },
  createToDo: function (content) {
    this.toDoList.push({
      id: Date.now() / Math.random(),
      content: content,
      timestamp: new Date().getTime(),
      done: false,
    });
  },
};

const ToDosContext = React.createContext(toDos);
export default ToDosContext;
export const ToDosContextProvider = (props) => {
  return (
    <ToDosContext.Provider value={toDos}>
      {props.children}
    </ToDosContext.Provider>
  );
};
