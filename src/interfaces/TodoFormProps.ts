import { Todo } from '../types/TodoType';

export default interface TodoFormProps {
  todoInput: string;
  setTodoInput: any;
  todoItems: Todo[];
  setTodoItems: any;
  editTodo: Todo;
  setEditTodo: any;
}
