import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import './App.css';
import { Todo } from './types/TodoType';

const App = () => {
  const initialStateOfTodoItems: Todo[] =
    JSON.parse(localStorage.getItem('todos') as string) || ([] as Todo[]);
  const [todoInput, setTodoInput] = useState('');
  const [todoItems, setTodoItems] = useState(initialStateOfTodoItems);
  const [editTodo, setEditTodo] = useState(null as unknown as Todo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoItems));
  }, [todoItems]);

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
        <br />
        <Todos
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
};

export default App;
