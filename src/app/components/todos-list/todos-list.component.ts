import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {TodoControlComponent} from "../todo-control/todo-control.component";
import {TodoService} from "../../services/todo.service";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {Todo} from "../../models/todo.model";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'todos-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TodoItemComponent,
    TodoControlComponent,
    CdkDropList,
    CdkDrag
  ],
  template: `
    <div
      class="list-container"
      cdkDropList
      [cdkDropListData]="todos()"
      (cdkDropListDropped)="onDrop($event)"
    >
      @for (todo of todos(); track todo.id){
        <todo-item
          class="todo-item"
          cdkDrag
          cdkDragLockAxis="y"
          cdkDragBoundary=".list-container"
          [todo]="todo"
          (onCompleted)="onTodoCompleted($event)"
          (onDeleted)="onTodoDeleted($event)"
          [@todoItemAnimation]="true"
        />
      }
    </div>
    <app-todo-control (buttonClicked)="onButtonClicked($event)"/>
  `,
  animations: [
    trigger('todoItemAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('.3s', style({ opacity: 0 }))
      ])
    ]),
  ],
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent {

  todoService = inject(TodoService)

  todos = this.todoService.allTodos

  clickedButton: string = 'All'

  onTodoCompleted(todoId: number) {
    this.todoService.toggleCompleted(todoId)
  }

  onTodoDeleted(todoId: number) {
    this.todoService.removeTodoById(todoId)
  }

  onDrop(event: CdkDragDrop<Todo[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  onButtonClicked(btnLabel: string) {
    if (this.clickedButton === btnLabel) return
    switch (btnLabel){
      case 'All': {
        this.todos = this.todoService.allTodos
        break
      }
      case 'Active': {
        this.todos = this.todoService.activeTodos
        break
      }
      case 'Completed': {
        this.todos = this.todoService.completedTodos
        break
      }
    }
    this.clickedButton = btnLabel
  }
}
