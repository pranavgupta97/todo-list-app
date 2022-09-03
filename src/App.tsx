import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import "./App.css";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoItems, setTodoItems] = useState([] as Todo[]);
  const [editTodo, setEditTodo] = useState(null as unknown as Todo);

  return (
    <div className="app-container">
      <div className="todo-container">
        <Header />
        <TodoForm
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <Todos todoItems={todoItems} setTodoItems={setTodoItems} />
      </div>
    </div>
  );
};

export default App;
