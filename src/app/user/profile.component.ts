import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/index';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.comonent.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup
  private firstName!:FormControl
  private lastName!:FormControl

constructor(private authService: AuthService,
            private router: Router,
  @Inject(TOASTR_TOKEN) private toastr: Toastr ){}

  ngOnInit() {
   this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required,
  Validators.pattern('[a-zA-Z].*')])
   this.lastName = new FormControl(this.authService.currentUser.lastName,[Validators.required,
  Validators.pattern('[a-zA-Z].*')])
  this.profileForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName
  })
  }

  saveProfile(formsValues: { firstName: string; lastName: string; }){ //type:any
    if(this.profileForm.valid){
    this.authService.updateCurrentUser(formsValues.firstName,formsValues.lastName)
    .subscribe(() => {
      this.toastr.success('profile saved','');
    });
    }
  }

  validateFirstName(){
  return  this.firstName.valid || this.firstName.untouched
  }
  validateLastName(){
    return  this.lastName.valid || this.lastName.untouched
  }

  cancel(){
    this.router.navigate(['events'])
  }

  logout(){
    this.authService.logout().subscribe(() =>{
       this.router.navigate(['/user/login']);
    })
  }

}
