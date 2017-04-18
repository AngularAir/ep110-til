import { Component } from '@angular/core';
@Component({
  selector: 'til-ng-template-outlet',
  template: `
    <h2>NgTemplateOutlet Example</h2>
    <h4>
      <a href="https://angular.io/docs/ts/latest/api/common/index/NgTemplateOutlet-directive.html">Documentation</a>
    </h4>

    <ng-container 
      *ngTemplateOutlet="product; context: {item:item1}"></ng-container>
    <ng-container 
      [ngTemplateOutlet]="product" 
      [ngOutletContext]="{item:item2}"></ng-container>
    
    <ng-template #product let-product="item">
      <div>
        {{product.name}} {{product.price}}
      </div>
    </ng-template>
  `,
  styles: [`div{font-weight:bold;padding:1em;border-bottom:2px solid #000;}`]
})
export class NgTemplateOutletComponent {
  item1 = {name: 'Quadcopter', price: 100};
  item2 = {name: 'Wooden train', price: 5};
}
