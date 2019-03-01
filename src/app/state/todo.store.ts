import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from './todo.model';
import { Injectable } from '@angular/core';

export interface TodoState extends EntityState<Todo> {}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'todo' })
export class TodoStore extends EntityStore<TodoState, Todo> {

  constructor() {
    super();
  }

}

