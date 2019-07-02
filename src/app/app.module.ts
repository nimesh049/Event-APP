import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventsThumbnailsComponent,
  EventsDetailsComponent,
  CreateEventsComponent,
  SessionsListComponent
} from './events/index';

import { AppComponent } from './app.component';

import { NavbarComponent } from './nav/navbar.component';

import { Error404Component } from './errors/404page.component';

import { appRoutes } from './app-routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/events-details/create-session.component';
import { EventBookingComponent } from './events/event-booking.component';


// import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailsComponent,
    NavbarComponent,
    EventsDetailsComponent,
    CreateEventsComponent,
    Error404Component,
    CreateSessionComponent,
    SessionsListComponent,
    EventBookingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    // UserModule
  ],
  providers: [
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyCheck }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyCheck(component: CreateEventsComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, you really wanna cancel event??');
  }
  return true;
}
