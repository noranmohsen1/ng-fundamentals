import { ISession } from "../shared";
import { SessionListComponent } from "./session-list.component"

describe('sessionListCompenont',()=>{
  let component: SessionListComponent;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockAuthService :any, mockVoterService :any;

  beforeEach(()=>{
    component= new SessionListComponent(mockAuthService,mockVoterService);

  })

  describe('ngOnChanges', ()=>{
    it('should filter the sessions correctly', ()=>{
       component.sessions = <ISession[]>
     [{name: 'session 1', level: 'intermediate'},
      {name: 'session 2', level: 'intermediate'},
      {name: 'session 3', level: 'beginner'}];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    })
    it('should sort the sessions correctly', ()=>{
      component.sessions = <ISession[]>
    [{name: 'session 1', level: 'intermediate'},
     {name: 'session 3', level: 'intermediate'},
     {name: 'session 2', level: 'beginner'}];
     component.filterBy = 'all';
     component.sortBy = 'name';
     component.eventId = 3;

     component.ngOnChanges();

     expect(component.visibleSessions[2].name).toBe('session 3');
   })
  })
})
