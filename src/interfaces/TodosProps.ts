import { Todo } from '../types/TodoType';

export default interface TodosProps {
  todoItems: Todo[];
  setTodoItems: any;
  setEditTodo: any;
}
