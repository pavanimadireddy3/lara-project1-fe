import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';

const routes: Routes = [
  {
    path: 'signup', component : SignupComponent
  },
  {
    path: 'forgotten-pw', component : ForgottenPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
