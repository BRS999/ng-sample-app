import { Routes } from '@angular/router';

import { EventsListComponent, CreateEventComponent, EventDetailsComponent } from "./app/events/index";
import { ErrorsComponent } from "./app/errors/errors.component";
import { EventsListResolverService, EventRouteActivatorService } from "./app/shared/index";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: ErrorsComponent },
    { path: 'user', loadChildren: './app/user/user.module#UserModule'},
    { path: '', redirectTo: '/events', pathMatch: 'full' },
]