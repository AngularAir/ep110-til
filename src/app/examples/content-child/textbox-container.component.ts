import { Component, ContentChild, Input } from '@angular/core';
import { TextboxDirective } from './textbox.directive';

@Component({
  selector: 'til-textbox-container',
  template: `
    <label [class.has-error]="input?.control.invalid">
      {{label}}
      <ng-content></ng-content>
    </label>
  `,
  styles: [`
    label {padding-bottom:1em;}
    .has-error {border-bottom: 2px solid red;}
  `]
})
export class TextboxContainerComponent {
  @Input() label: string;
  @ContentChild(TextboxDirective) input;
}
