import { ID } from '@datorama/akita';
import { TodoStore } from './todo.store';
import { createTodo, Todo } from './todo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private todoStore: TodoStore) {
  }


  public addTodo(title) {
    const todo = createTodo({title});
    this.todoStore.add(todo);
  }

  public complete(todo: Todo) {
    this.todoStore.update(todo.id, todo);
    console.log('isCompleted is now ', todo.isCompleted, 'for todo with id ', todo.id);
  }

  public delete(todo: Todo) {
    this.todoStore.remove(todo.id);
    console.log(todo);
  }
}
