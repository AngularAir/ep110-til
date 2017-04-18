import { Component } from '@angular/core';
@Component({
  selector: 'til-content-child',
  template: `
    <h2>@ContentChild Example</h2>
    <h4><a href="https://angular.io/docs/ts/latest/api/core/index/ContentChild-decorator.html">Documentation</a></h4>
    <form>
      <til-textbox-container label="Enter a Username">
        <input type="text" name="username" ngModel required tilTextbox>
      </til-textbox-container>
    </form>
  `
})
export class ContentChildComponent {}
