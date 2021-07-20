import "./App.css";
import React from "react";
import Header from "./components/UI/Header";
import { ToDosContextProvider } from "./store/ToDosContext";
import ToDoList from "./components/UI/ToDoList";
import AddToDo from "./components/UI/AddToDo";

function App() {
  return (
    <ToDosContextProvider>
      <Header></Header>
      <AddToDo />
      <ToDoList></ToDoList>
    </ToDosContextProvider>
  );
}

export default App;
