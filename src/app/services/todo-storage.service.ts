import {inject, Injectable} from "@angular/core";
import { Todo } from "../models/todo.model";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {

  localStorage = inject(LocalStorageService)

  saveTodosToLocalstorage(todos: Todo[]){
    this.localStorage.saveItem('todos', todos)
  }

  getTodosFromLocalstorage(){
    const todos: Todo[] = this.localStorage.getItem('todos')
    if (todos) return todos
    else return []
  }
}
