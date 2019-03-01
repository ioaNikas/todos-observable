import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo, TodoService } from '../state';
import { FormControl } from '@angular/forms';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<ID>();
  @Output() complete = new EventEmitter<Todo>()

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

}
