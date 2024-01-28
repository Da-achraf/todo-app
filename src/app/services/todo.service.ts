import {computed, inject, Injectable, signal} from "@angular/core";
import {Todo} from "../models/todo.model";
import {TodoStorageService} from "./todo-storage.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoStorage = inject(TodoStorageService)

  readonly todos = signal<Todo[]>([])

  readonly allTodos = computed(() => {
    return this.todos()
  })

  readonly activeTodos = computed(() => {
    return this.todos().filter(todo => !todo.isCompleted)
  })

  readonly completedTodos = computed(() => {
    return this.todos().filter(todo => todo.isCompleted)
  })

  constructor() {
    const todos = this.todoStorage.getTodosFromLocalstorage()
    this.todos.set(todos)
  }

  createTodo(todoDescription: string): Todo {
    return {
      id: new Date().getTime(),
      description: todoDescription,
      isCompleted: false,
      created_at: new Date()
    }
  }

  pushTodo(todo: Todo): void {
    this.todos.update(todos => [...todos, todo])
  }

  toggleCompleted(todoId: number) {
    this.todos.update(todos =>
      todos.map(todo =>
        ({...todo, isCompleted: todo.id === todoId ? !todo.isCompleted : todo.isCompleted})
      )
    )
  }

  removeTodoById(todoId: number) {
    this.todos.update(todos => todos.filter(todo => todo.id !== todoId))
  }

  clearCompleted() {
    this.todos.update(todos => todos.filter(todo => !todo.isCompleted))
  }

}
