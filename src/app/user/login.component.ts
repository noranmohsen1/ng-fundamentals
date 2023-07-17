import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName? : string
  password? : string
  mouseoverLogin?  :boolean
  loginInvalid =false;
   constructor(private authService: AuthService,
               private router: Router){}

  login(formValues: { userName: string; password: string; }){ //type :any
     this.authService.loginUser(formValues.userName,formValues.password)
     .subscribe(resp =>{
      if(!resp){
       this.loginInvalid = true;
      }else{
       this.router.navigate(['events'])
      }
     })
  }

  cancel(){
    this.router.navigate(['events'])
  }
}
