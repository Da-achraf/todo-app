import {Button} from "../models/button.model";

export const BUTTONS: Button[] = [
  {
    label: 'All',
    isActive: true
  },
  {
    label: 'Active',
    isActive: false
  },
  {
    label: 'Completed',
    isActive: false
  }
]

// Available Themes
export const enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
