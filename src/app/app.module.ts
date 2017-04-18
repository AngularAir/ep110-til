import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EventManagerComponent } from './examples/event-manager.component';
import { ContentChildComponent } from './examples/content-child.component';
import { NgTemplateOutletComponent } from './examples/ng-template-outlet.component';
import { TextboxContainerComponent } from './examples/content-child/textbox-container.component';
import { TextboxDirective } from './examples/content-child/textbox.directive';

const routes: Routes = [
  {path: 'eventmanager', component: EventManagerComponent},
  {path: 'contentchild', component: ContentChildComponent},
  {path: 'ngtemplateoutlet', component: NgTemplateOutletComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EventManagerComponent,
    ContentChildComponent,
    NgTemplateOutletComponent,
    TextboxContainerComponent,
    TextboxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
