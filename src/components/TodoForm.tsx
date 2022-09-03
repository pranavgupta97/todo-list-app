import React, { FC } from 'react';
import { v4 as uuidV4 } from 'uuid';

import TodoFormProps from '../interfaces/TodoFormProps';
import { Todo } from '../types/TodoType';

const TodoForm: FC<TodoFormProps> = ({
  todoInput,
  setTodoInput,
  todoItems,
  setTodoItems,
  editTodo,
  setEditTodo,
}) => {
  const onInputChange = (event: any) => {
    setTodoInput(event.target.value);
  };

  const onFormSubmit = (event: any) => {
    event.preventDefault();

    if (!editTodo) {
      setTodoItems((previousTodoItems: Todo[]) => {
        return [
          { id: uuidV4(), text: todoInput, completed: false } as Todo,
          ...todoItems,
        ];
      });
      setTodoInput('');
    } else {
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Whatchu gots to do bruv...?"
        className="todo-input"
        value={todoInput}
        required={true}
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
