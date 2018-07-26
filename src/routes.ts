import { EventsListComponent } from "./app/events/events-list/events-list.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { Routes } from '@angular/router';
import { CreateEventComponent } from "./app/events/create-event/create-event.component";
import { ErrorsComponent } from "./app/errors/errors.component";
import { EventRouteActivatorService } from "./app/shared/event-route-activator.service";
import { EventsListResolverService } from "./app/shared/events-list-resolver.service";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: ErrorsComponent },
    { path: 'user', loadChildren: './app/user/user.module#UserModule'},
    { path: '', redirectTo: '/events', pathMatch: 'full' },
]