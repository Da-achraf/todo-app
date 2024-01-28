import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TodoInputComponent} from "./components/todo-input/todo-input.component";
import {TodosListComponent} from "./components/todos-list/todos-list.component";
import {Todo} from "./models/todo.model";
import {TodoService} from "./services/todo.service";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoInputComponent, TodosListComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  todoService = inject(TodoService)

  onInput(todo: Todo) {
    this.todoService.pushTodo(todo)
  }
}
