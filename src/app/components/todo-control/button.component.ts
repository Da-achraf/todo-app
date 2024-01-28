import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-btn',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass
  ],
  template: `
    <button
      (click)="onClicked()"
      class="button"
      [ngClass]="{'active': isActive}"
    >
      {{ label }}
    </button>
  `,
  styles: [`
    .button {
      /* Common Styles */
      @apply text-sm font-bold px-[.5rem] py-[.3rem] transition-all duration-300 focus:outline-none

      /* Light Theme */
      text-darkGrayishBlue hover:text-veryDarkBlue

      /* Dark Theme */
      dark:hover:text-_lightGrayishBlue
    }

    .active {
      /* Common Styles */
      @apply text-brightBlue
    }
  `]
})
export class ButtonComponent {
  @Input() label!: string
  @Input() isActive!: boolean

  @Output() clicked = new EventEmitter<string>()

  onClicked() {
    this.clicked.emit(this.label)
  }
}
