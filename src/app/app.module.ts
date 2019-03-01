import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { TodoStore } from './state/todo.store';
import { TodoComponent } from './todo/todo.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    TodoComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [TodoStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
