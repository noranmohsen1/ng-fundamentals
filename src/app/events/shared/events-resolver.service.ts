import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EventService } from './event.service';


@Injectable({
  providedIn: 'root'
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class EventsResolverService implements Resolve<any> {

  constructor(private eventService:EventService ) { }

  resolve(route: ActivatedRouteSnapshot){
    return this.eventService.getEvent(route.params['id'])
  }
}
