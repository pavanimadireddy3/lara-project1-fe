import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgottenPasswordService } from './forgotten-password.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrl: './forgotten-password.component.css'
})
export class ForgottenPasswordComponent {
 form: FormGroup;
 results: string = "";
 status: boolean = true;
 constructor(formBuilder : FormBuilder,private service: ForgottenPasswordService){
  this.form = formBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email])
  });
 }
 get email() {
  return this.form.get('email');
 }
 onSubmit() {
  if(this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }
  this.service.sendEmail(this.form.value.email).subscribe(
    data => {
      this.status = false;
      this.results = data.results;
    }
  )
 }
}
