import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './components/main-view/main-view.component';
import { GoalDetailComponent } from './components/goal-detail/goal-detail.component';
import { CreateGoalComponent } from './components/create-goal/create-goal.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
  },
  {
    path: 'create',
    component: CreateGoalComponent,
  },
  {
    path: 'report/:goalId',
    component: ReportComponent,
  },
  {
    path: ':goalId',
    component: GoalDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
