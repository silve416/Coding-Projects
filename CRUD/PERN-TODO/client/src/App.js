import React, { Fragment } from "react";
import InputTodo from "./components/inputTodo";
import ListTodo from "./components/listTodos";
import EditTodo from "./components/editTodo";
import './App.css';

function App() {
  return (
   <Fragment>
     <div className="container">
      <InputTodo />
      <ListTodo />
     </div>
   </Fragment>
  );
}

export default App;
