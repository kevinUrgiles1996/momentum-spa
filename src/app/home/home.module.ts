import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { UserComponent } from './components/user/user.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { GoalsComponent } from './components/goals/goals.component';
import { GoalComponent } from './components/goal/goal.component';

@NgModule({
  declarations: [UserComponent, MainViewComponent, GoalsComponent, GoalComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
