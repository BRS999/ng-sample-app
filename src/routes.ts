import { Routes } from '@angular/router';

import { EventsListComponent, CreateEventComponent, EventDetailsComponent } from "./app/events";
import { EventsListResolverService, EventRouteActivatorService } from "./app/shared";
import { ErrorComponent } from './app/error/error.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
]