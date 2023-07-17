import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { SessionListComponent } from "./session-list.component";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AuthService } from "src/app/user/auth.service";
import { VoterService } from "./voter.service";
import { DurationPipe } from "../shared";
import { By } from "@angular/platform-browser";

describe('SessionListComponent', ()=>{
let mockAuthService , mockVoterService ,
    fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    element: HTMLElement,
    debugEl: DebugElement

  beforeEach(()=>{
    mockAuthService = { isAuthenticated: () => true ,currentUser: {userName:'joe'}}
    mockVoterService= {userHasVoted: ()=> true}
     TestBed.configureTestingModule({
        declarations: [
          SessionListComponent,
          DurationPipe,
        ],
        providers: [
          {provide: AuthService, useValue: mockAuthService},
          {provide: VoterService, useValue: mockVoterService},
        ],
        schemas: [
          NO_ERRORS_SCHEMA
        ]
     });
     fixture = TestBed.createComponent(SessionListComponent);
     component = fixture.componentInstance;
     debugEl= fixture.debugElement;
     element = fixture.nativeElement;
  })
  describe('initial display', ()=>{
     it('should have the correct name',()=>{
        component.sessions = [
          {name: ' session 1', id: 3 , presenter: 'joe', duration: 1,
          level: 'beginner',abstract: 'abstract', voters: ['john','bob']}
        ]
        component.filterBy = 'all';
        component.sortBy = 'name';
        component.eventId = 4;
        component.ngOnChanges();

        fixture.detectChanges();

        // expect(element.querySelector('[well-title]')?.textContent).toContain('session 1')
        expect(debugEl.query(By.css('[well-title]'))
        .nativeElement.textContent).toContain('session 1');
     })
  })
})
