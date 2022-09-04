import React, { FC, useEffect, useRef } from 'react';
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
  const todoInputTextField = useRef<HTMLInputElement>(null);

  const onInputChange = (event: any) => {
    setTodoInput(event.target.value);
  };

  useEffect(() => {
    if (todoItems.length === 0) {
      setTodoInput('');
    }
  }, [todoItems, setTodoInput]);

  useEffect(() => {
    if (editTodo) {
      setTodoInput(editTodo.text);
      todoInputTextField.current?.focus();
    } else {
      setTodoInput('');
    }
  }, [editTodo, setTodoInput]);

  const onFormSubmit = (event: any) => {
    event.preventDefault();

    if (!editTodo) {
      setTodoItems((previousTodoItems: Todo[]) => {
        return [
          { id: uuidV4(), text: todoInput, completed: false } as Todo,
          ...previousTodoItems,
        ];
      });
    } else {
      const updatedTodos = todoItems.map((todoItem) => {
        if (todoItem.id === editTodo.id) {
          return { ...todoItem, text: todoInput, completed: false };
        } else {
          return todoItem;
        }
      });

      setTodoItems(updatedTodos);
      setEditTodo(null as unknown as Todo);
    }

    setTodoInput('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        ref={todoInputTextField}
        placeholder="Whatchu gots to do bruv...?"
        className="todo-input"
        value={todoInput}
        required={true}
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TodoForm;
