import {inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private document = inject(DOCUMENT)
  private localStorage = this.document.defaultView?.localStorage

  getItem(key: string) {
    if (this.localStorage) {
      const item = this.localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    }
    return null
  }

  saveItem(key: string, value: any){
    if (this.localStorage) {
      this.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  // Not used
  removeItem(key: string) {
    if (this.localStorage)
      this.localStorage.removeItem(key)
  }
}
