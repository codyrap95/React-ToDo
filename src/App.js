import React from "react";
import Header from "./components/UI/Header";
import { ToDosContextProvider } from "./store/ToDosContext";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import classes from "./App.module.css";
import Card from "./components/UI/Card";

function App() {
  return (
    <ToDosContextProvider>
      <Header></Header>
      <main className={classes.main}>
        <Card>
          <AddToDo />
        </Card>
        <Card>
          <ToDoList></ToDoList>
        </Card>
      </main>
    </ToDosContextProvider>
  );
}

export default App;
