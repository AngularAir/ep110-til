import { Component } from '@angular/core';
@Component({
  selector: 'til-content-child',
  template: `
    <h2>@ContentChild Example</h2>
    <form>
      <til-textbox-container label="Enter a Username">
        <input type="text" name="username" ngModel required tilTextbox>
      </til-textbox-container>
    </form>
  `
})
export class ContentChildComponent {}
