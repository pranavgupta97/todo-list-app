import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import "./App.css";

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  return (
    <div className="app-container">
      <div className="todo-container">
        <Header />
        <TodoForm
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
        />
      </div>
    </div>
  );
};

export default App;
