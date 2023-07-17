import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../shared/index';


@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit{
  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession= new EventEmitter()
  newSessionForm!:FormGroup
  name ?: FormControl
  presenter? : FormControl
  duration ?: FormControl
  level ?: FormControl
  abstract ?: FormControl



  ngOnInit() {
    this.name =new FormControl('',Validators.required)
    this.presenter =new FormControl('',Validators.required)
    this.duration =new FormControl('',Validators.required)
    this.level =new FormControl('',Validators.required)
    this.abstract =new FormControl('',[Validators.required,
         Validators.maxLength(400),
        ])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveSession(formValues:any){
   const session:ISession = {
    id: undefined!,
    name: formValues.name,
    duration: +formValues.duration,
    level: formValues.level,
    presenter: formValues.presenter,
    abstract: formValues.abstract,
    voters: []
   }
this.saveNewSession.emit(session)

  }

  cancel(){
    this.cancelAddSession.emit()
  }
}
