import {inject, Injectable, signal} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  readonly isDarkTheme = signal<boolean>(false)
  private localStorage = inject(LocalStorageService)

  constructor() {
    const theme = this.localStorage.getItem('theme')
    if (typeof window !== 'undefined'){
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches))
        this.setTheme('dark')
      else
        this.setTheme('theme')

    }
  }

  toggleTheme(){
    const isDarkTheme = document.documentElement.classList.contains('dark')

    isDarkTheme ? this.setTheme('light') : this.setTheme('dark')
    this.isDarkTheme.update(mode => !mode)
  }

  private setTheme(theme: string){
    if (theme === 'dark'){
      document.documentElement.classList.add('dark')
      this.localStorage.saveItem('theme', 'dark')
    }else {
      document.documentElement.classList.remove('dark')
      this.localStorage.saveItem('theme', 'light')
    }
  }

}
