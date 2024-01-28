import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgClass} from "@angular/common";
import { Todo } from "../../models/todo.model";

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <div class="todo-item-container">
      <span
        class="check"
        (click)="onTodoCompleted()"
        [ngClass]="{
          'bg-gradient-to-bl from-from to-to': todo.isCompleted,
          'bg-veryLightGray': !todo.isCompleted
        }"
      >
          <svg
            [ngClass]="{'opacity-100': todo.isCompleted, 'opacity-0': !todo.isCompleted}"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
          >
            <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/>
          </svg>
      </span>
      <p
        (click)="onTodoCompleted()"
        class="todo-text" [ngClass]="{'isCompleted': todo.isCompleted}"
      >
        {{ todo.description }}
      </p>
      <span class="close" (click)="onTodoDeleted()">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
        </svg>
      </span>
    </div>
  `,
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() todo!: Todo;

  @Output() onCompleted = new EventEmitter<number>()
  @Output() onDeleted = new EventEmitter<number>()

  onTodoCompleted() {
    this.onCompleted.emit(this.todo.id)
  }

  onTodoDeleted() {
    this.onDeleted.emit(this.todo.id)
  }
}
