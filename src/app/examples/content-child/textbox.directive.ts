import { Directive, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[tilTextbox]'
})
export class TextboxDirective {
  constructor(@Optional() public control: NgControl) { }
}
