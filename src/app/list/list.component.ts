import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../state/todo.model';
import { TodoQuery } from '../state/todo.query';
import { Observable } from 'rxjs';
import { TodoService } from '../state';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() activeFilter: string;
  todos$: Observable<Todo[]>;
  completedTodos$: Observable<Todo[]>;
  activeTodos$: Observable<Todo[]>;

  constructor(
    private todoQuery: TodoQuery,
    private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos$ = this.todoQuery.selectAll();
    this.completedTodos$ = this.todoQuery.getCompletedTodos();
    this.activeTodos$ = this.todoQuery.getActiveTodos();
    console.log(this.todos$);
  }

  public delete(todo: Todo) {
    this.todoService.delete(todo);
  }

  public complete(todo: Todo) {
    todo = {id: todo.id, title: todo.title, isCompleted : !todo.isCompleted};
    this.todoService.complete(todo);
  }
}
