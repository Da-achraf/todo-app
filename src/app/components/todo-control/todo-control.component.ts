import {ChangeDetectionStrategy, Component, computed, EventEmitter, inject, Output} from "@angular/core";
import {TodoService} from "../../services/todo.service";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {BUTTONS} from "../../constants/constants";
import {ButtonComponent} from "./button.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-todo-control',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-control.component.html',
  imports: [
    RouterLinkActive,
    RouterLink,
    ButtonComponent,
    NgClass
  ],
  styleUrls: ['./todo-control.component.css']
})
export class TodoControlComponent {

  @Output() buttonClicked = new EventEmitter<string>()

  protected buttons = BUTTONS;

  todoService = inject(TodoService)

  itemsCount = computed(() => {
    return this.todoService.todos().filter(todo => !todo.isCompleted).length
  })

  onClearCompleted() {
    this.todoService.clearCompleted()
  }

  onButtonClicked(btnLabel: string){
    this.buttonClicked.emit(btnLabel)

    this.buttons = this.buttons.map(button =>
      ({...button, isActive: button.label === btnLabel})
    )
  }

}
