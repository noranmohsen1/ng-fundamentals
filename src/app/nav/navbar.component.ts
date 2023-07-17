import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, ISession } from '../events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm : string ="";
  foundSessions: ISession[] =[];

   constructor(public auth: AuthService,
               private eventService: EventService ){}



   searchSessions(searchTerm:string){

        this.eventService.SearchSessions(searchTerm)
          .subscribe(sessions => {this.foundSessions = sessions});
   }
}
