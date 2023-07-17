import { Directive } from '@angular/core';
import {  FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appLocationValidator]',
  providers:[{provide: NG_VALIDATORS,
              useExisting: LocationValidatorDirective,
              multi: true}]
})
export class LocationValidatorDirective implements Validator{


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate(formGroup: FormGroup): { [key: string] :any } {
   const addressControl = formGroup.controls['address'];
   const cityControl = formGroup.controls['city'];
   const countryControl = formGroup.controls['country'];


   if((addressControl && addressControl.value &&
       cityControl && cityControl.value &&
       countryControl && countryControl.value)){
     return [];
   }else{
     return {appLocationValidator: false}

   }
  }
  constructor() { }



}
