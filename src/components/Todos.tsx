import React, { FC } from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

interface TodosProps {
  todoItems: Todo[];
  setTodoItems: any;
}

const Todos: FC<TodosProps> = ({ todoItems, setTodoItems }) => {
  const onDoneClick = (todoItem: Todo) => {
    setTodoItems((previousTodoItems: Todo[]) => {
      return previousTodoItems.map((previousTodoItem) => {
        if (previousTodoItem.id === todoItem.id) {
          return { ...todoItem, completed: !todoItem.completed };
        } else {
          return previousTodoItem;
        }
      });
    });
  };

  const onDeleteClick = (todoItem: Todo) => {
    setTodoItems((previousTodoItems: Todo[]) => {
      return previousTodoItems.filter(
        (previousTodoItem) => previousTodoItem.id !== todoItem.id
      );
    });
  };

  return (
    <div>
      {todoItems.map((todoItem) => (
        <li className="todo-item" key={todoItem.id}>
          <input
            type="text"
            value={todoItem.text}
            className={`todo-list ${todoItem.completed ? "done" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-done task-button"
              onClick={() => onDoneClick(todoItem)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button">
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => onDeleteClick(todoItem)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todos;
