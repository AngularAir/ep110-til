import { Component } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
@Component({
  selector: 'til-event-manager',
  template: `
    <h2>EventManager Example</h2>
    <h4><a href="https://angular.io/docs/ts/latest/api/platform-browser/index/EventManager-class.html">Documentation</a></h4>
    <div [class.selected]="selected">Some Item</div>
    <span>Hit ctrl+a to toggle select</span>
  `,
  styles: [`
    div {padding:2em;border:2px solid #666;width: 5em;}
    .selected {background-color:#999;border:2px solid #333;}
    span {display:inline-block;margin-top:2em;font-style:italic;}
  `]
})
export class EventManagerComponent {
  selected = false;
  constructor(private eventManager: EventManager) {
    this.eventManager.addGlobalEventListener(
      'window',
      'keydown.control.a',
      () => {
        this.selected = !this.selected;
      });
  }
}
