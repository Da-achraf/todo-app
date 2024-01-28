import {computed, Injectable, signal} from "@angular/core";
import {Todo} from "../models/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly isDarkMod = signal<boolean>(false)

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
    // const darkMode = localStorage.getItem('isDarkMode')
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

  toggleDarkMode(){
    if (!document.body.classList.contains('dark'))
      document.body.classList.add('dark')
    else
      document.body.classList.remove('dark')

    this.isDarkMod.update(mode => !mode)
  }


}
