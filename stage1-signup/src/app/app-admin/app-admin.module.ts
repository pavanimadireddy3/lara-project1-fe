import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAdminRoutingModule } from './app-admin-routing.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';


@NgModule({
  declarations: [ SignupComponent, ForgottenPasswordComponent],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
})
export class AppAdminModule { }
