import { EventsListComponent } from "./app/events/events-list/events-list.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { Routes } from '@angular/router';
import { CreateEventComponent } from "./app/events/create-event/create-event.component";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
]