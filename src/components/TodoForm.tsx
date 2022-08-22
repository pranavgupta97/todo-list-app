import React, { FC } from "react";

interface TodoFormProps {
  todoInput: string;
  setTodoInput: any;
  todoItems: string[];
  setTodoItems: any;
}

const TodoForm: FC<TodoFormProps> = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Whatchu gots to do bruv...?"
        className="todo-input"
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
