import { ID, guid } from '@datorama/akita';

export interface Todo {
  id: ID;
  title: string;
  isCompleted: boolean;
}

export function createTodo(object: Partial<Todo>) {
  return {
    id: guid(),
    title: object.title,
    isCompleted : false
  } as Todo;
}
