import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  person: FormGroup;
  strongCheck: boolean = true;
  strongCheckMessage: string = "";
  constructor(formBuilder:FormBuilder,private client:HttpClient){
    this.person = formBuilder.group({
      firstName: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(25),Validators.pattern('^[a-z]+$')]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(15),Validators.pattern('^[a-z]+$')]),
      username: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    });
  }
  get firstName() {
    return this.person.get('firstName');
  }
  get lastName() {
    return this.person.get('lastName');
  }
  get password() {
    return this.person.get('password');
  }
  get username() {
    return this.person.get('username');
  }
  checkStrongPassword(): boolean {
    var password = this.person.value.password;
    if(password.search(/[a-z]/) == -1) {
      this.strongCheckMessage = "password must contain atleast one lowercase letter";
      return true;
    }
    if(password.search(/[A-Z]/) == -1) {
      this.strongCheckMessage = "password must contain atleast one uppercase letter";
      return true;
    }
    if(password.search(/[0-9]/) == -1) {
      this.strongCheckMessage = "password must contain atleast one digit ";
      return true;
    }
    if(password.indexOf('_') == -1 && password.search(/\W/) == -1) {
      this.strongCheckMessage = "password must contain atleast one uppercase letter";
      return true;
    }
    return false;
  }
  save(){
    
    this.client.post('http://localhost:9090/person/save',this.person.value).subscribe(
        r1 => {
          console.log(r1);
        }
    );
  }
}
