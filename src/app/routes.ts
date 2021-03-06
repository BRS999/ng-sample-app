import { Routes } from '@angular/router';

import { EventsListComponent, CreateEventComponent, EventDetailsComponent, CreateSessionComponent } from "./events";
import { EventsListResolverService, EventRouteActivatorService } from "./shared";
import { ErrorComponent } from './error/error.component';

export const appRoutes: Routes = [
    { path: 'events/create', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } },
    { path: 'events/session/create', component: CreateSessionComponent },
    { path: 'events/:id',  component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
]