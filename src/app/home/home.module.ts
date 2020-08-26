import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { UserComponent } from './components/user/user.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { GoalsComponent } from './components/goals/goals.component';
import { GoalComponent } from './components/goal/goal.component';
import { GoalDetailComponent } from './components/goal-detail/goal-detail.component';
import { GoalProgressComponent } from './components/goal-progress/goal-progress.component';
import { CreateGoalComponent } from './components/create-goal/create-goal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReportComponent } from './components/report/report.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    UserComponent,
    MainViewComponent,
    GoalsComponent,
    GoalComponent,
    GoalDetailComponent,
    GoalProgressComponent,
    CreateGoalComponent,
    ReportComponent,
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
