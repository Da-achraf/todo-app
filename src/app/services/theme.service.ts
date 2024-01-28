import {inject, Injectable, signal} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {Theme} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  readonly isDarkTheme = signal<boolean>(false)
  private localStorage = inject(LocalStorageService)

  constructor() {
    const theme = this.localStorage.getItem('theme')
    if (typeof window !== 'undefined'){
      if (theme === Theme.DARK || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches))
        this.setTheme(Theme.DARK)
      else
        this.setTheme(Theme.LIGHT)
    }
  }

  toggleTheme(){
    const isDarkTheme = document.documentElement.classList.contains('dark')

    isDarkTheme ? this.setTheme(Theme.LIGHT) : this.setTheme(Theme.DARK)
  }

  private setTheme(theme: string){
    if (theme === Theme.DARK){
      document.documentElement.classList.add('dark')
      this.localStorage.saveItem('theme', Theme.DARK)
      this.isDarkTheme.set(true)
    }else {
      document.documentElement.classList.remove('dark')
      this.localStorage.saveItem('theme', Theme.LIGHT)
      this.isDarkTheme.set(false)
    }

  }
}
