import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { TodosListComponent } from "./components/todos-list/todos-list.component";
import { Todo } from "./models/todo.model";
import { TodoService } from "./services/todo.service";
import { HeaderComponent } from "./components/header/header.component";
import { TodoStorageService } from "./services/todo-storage.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoInputComponent, TodosListComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {

  todoService = inject(TodoService)
  todoStorage = inject(TodoStorageService)

  ngOnInit() {
    // Save todos to localstorage before page reload
    if (typeof window !== 'undefined'){
      window.onbeforeunload = () => this.ngOnDestroy()
    }
  }

  onInput(todo: Todo) {
    this.todoService.pushTodo(todo)
  }


  ngOnDestroy(): void {
    const todos = this.todoService.todos()
    this.todoStorage.saveTodosToLocalstorage(todos)
  }
}
