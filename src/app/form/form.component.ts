import { Component, OnInit } from '@angular/core';
import { TodoService } from '../state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private todoService : TodoService) { }

  ngOnInit() {
  }

  addTodo(title) {
    this.todoService.addTodo(title);
    console.log('Added', title);
  }
}
