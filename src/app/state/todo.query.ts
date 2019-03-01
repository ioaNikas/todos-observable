import { QueryEntity } from '@datorama/akita';
import { TodoStore, TodoState } from './todo.store';
import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class TodoQuery extends QueryEntity<TodoState, Todo> {


  constructor(protected store: TodoStore) {
    super(store);
  }

  public getCompletedTodos() {
    return this.selectAll().pipe(map( todos => todos.filter(todo => todo.isCompleted == true)));
  }

  public getActiveTodos() {
    return this.selectAll().pipe(map( todos => todos.filter(todo => todo.isCompleted == false)));
  }
}
