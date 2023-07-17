import { Routes } from "@angular/router";

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolverService,
  CreateSessionComponent,
  EventsResolverService
} from './events/index';
import { Page404Component } from "./errors/page404.component";




export const appRoutes:Routes = [
  {path: 'events/new', component: CreateEventComponent,
    canDeactivate:['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent ,
    resolve: {events:EventsListResolverService} },
  {path: 'events/:id', component: EventDetailsComponent ,
   resolve: {event: EventsResolverService} },
   {path: 'events/session/new', component: CreateSessionComponent },
  {path: 'page404', component: Page404Component },
  {path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: ()=>import('./user/user.module')
    .then(m => m.UserModule)
  }

]
