import "./App.css";
import React from "react";
import Header from "./components/UI/Header";
import { ToDosContextProvider } from "./store/ToDosContext";
import ToDoList from "./components/UI/ToDoList";

function App() {
  return (
    <ToDosContextProvider>
      <Header></Header>
      <ToDoList></ToDoList>
    </ToDosContextProvider>
  );
}

export default App;
