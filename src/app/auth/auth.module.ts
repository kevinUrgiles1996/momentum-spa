import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetComponent } from './components/reset/reset.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetComponent, NewPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
