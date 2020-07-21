import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { UserComponent } from './components/user/user.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { GoalsComponent } from './components/goals/goals.component';
import { GoalComponent } from './components/goal/goal.component';
import { GoalDetailComponent } from './components/goal-detail/goal-detail.component';
import { GoalProgressComponent } from './components/goal-progress/goal-progress.component';
import { ChartsModule } from 'ng2-charts';
import { CreateGoalComponent } from './components/create-goal/create-goal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
    MainViewComponent,
    GoalsComponent,
    GoalComponent,
    GoalDetailComponent,
    GoalProgressComponent,
    CreateGoalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class HomeModule {}