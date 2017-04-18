import { Component } from '@angular/core';

@Component({
  selector: 'til-root',
  template: `
    <nav>
      <a routerLink="/eventmanager" routerLinkActive="active">EventManager</a>
      <a routerLink="/contentchild" routerLinkActive="active">@ContentChild</a>
      <a routerLink="/ngtemplateoutlet" routerLinkActive="active">NgTemplateOutlet</a>
    </nav>
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  styles: [`
    a {padding:1em;}
    a.active {background-color:#ebebeb;}
  `]
})
export class AppComponent {
}
