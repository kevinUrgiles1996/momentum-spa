import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MaterialModule } from '../material/material.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserPasswordComponent } from './components/user-password/user-password.component';
import { UserPictureComponent } from './components/user-picture/user-picture.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SidenavComponent, UserInfoComponent, UserPasswordComponent, UserPictureComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
