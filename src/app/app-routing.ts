import { Routes } from '@angular/router';
import {
  EventsListComponent,
  EventsDetailsComponent,
  CreateEventsComponent,
  CreateSessionComponent,
  EventBookingComponent
} from './events/index';

import {Error404Component} from './errors/404page.component';
import { EventrouteactivatorService } from './events/events-details/eventrouteactivator.service';


export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventsComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events/booking/:id', component: EventBookingComponent},
  { path: 'events', component: EventsListComponent},
  { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventrouteactivatorService]},
  { path: 'events/session/new', component: CreateSessionComponent},
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: '**', component: Error404Component }
];
