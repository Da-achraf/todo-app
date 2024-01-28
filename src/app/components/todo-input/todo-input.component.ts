import {Component, EventEmitter, inject, Output} from "@angular/core";
import {Todo} from "../../models/todo.model";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'todo-input',
  standalone: true,
  template: `
    <div class="todo-input-container">
      <span class="circle"></span>
      <input
        class=""
        #input
        type="text"
        placeholder="Create a new todo..."
        (keyup.enter)="onInput($event); input.value = ''"
      />
    </div>
  `,
  styleUrl: './todo-input.component.css'
})
export class TodoInputComponent {

  @Output()
  todoInput = new EventEmitter<Todo>()

  todoService = inject(TodoService)

  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value
    if (!inputValue) return

    const todo = this.todoService.createTodo(inputValue)
    this.todoInput.emit(todo)
  }
}
