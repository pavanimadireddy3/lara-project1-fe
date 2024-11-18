import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrl: './forgotten-password.component.css'
})
export class ForgottenPasswordComponent {
 form: FormGroup;
 constructor(formBuilder : FormBuilder,private service: ForgottenPasswordComponent){
  this.form = formBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email])
  });
 }
 get email() {
  return this.form.get('email');
 }
 onSubmit() {
  this.service.sendEmail(this.form.value.email).subscribe(
    data => {
      console.log(data);
    }
  )
 }
}
