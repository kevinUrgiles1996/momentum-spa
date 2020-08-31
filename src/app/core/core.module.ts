import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth/auth.service';
import { TokenService } from './services/token/token.service';
import { GoalService } from './services/goal/goal.service';
import { UserService } from './services/user/user.service';
import { CauseService } from './services/cause/cause.service';
import { BlogTextPipe } from './pipes/blog-text/blog-text.pipe';

@NgModule({
  declarations: [BlogTextPipe],
  imports: [],
  providers: [
    AuthService,
    TokenService,
    GoalService,
    UserService,
    CauseService
  ]
})
export class CoreModule { }
