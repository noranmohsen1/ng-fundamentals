/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  isDirty :boolean = true
  newEvent: any
  constructor(private router: Router,
              private eventService: EventService ){}


  saveEvent(formValues:any){
     this.eventService.saveEvent(formValues).subscribe(() =>{
     this.isDirty = false
     this.router.navigate(['/events'])
    });
  }

  cancel(){
   this.router.navigate(['/events'])
  }

}
