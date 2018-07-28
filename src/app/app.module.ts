import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import {
  EventDetailsComponent,
  CreateEventComponent,
  EventsListComponent,
  EventThumbnailComponent,
  CreateSessionComponent,
  SessionListComponent
} from './events';
import { appRoutes } from './routes';
import { EventRouteActivatorService, ToastrService, EventService } from './shared';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './user/auth.service';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm("You have not saved this event, do you want to cancel?")
  }
  return true;
}
