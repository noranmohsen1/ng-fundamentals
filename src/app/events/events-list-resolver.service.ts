import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable({
  providedIn: 'root'
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class EventsListResolverService implements Resolve<any> {

  resolve(){
    return this.eventService.getEvents()
  }
  constructor(private eventService:EventService ) { }
}
