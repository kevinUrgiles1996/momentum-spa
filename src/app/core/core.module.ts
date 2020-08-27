import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth/auth.service';
import { TokenService } from './services/token/token.service';
import { GoalService } from './services/goal/goal.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    TokenService,
    GoalService,
    UserService
  ]
})
export class CoreModule { }
