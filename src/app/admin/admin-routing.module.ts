import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { CausesComponent } from './components/causes/causes.component';
import { CreateComponent } from './components/create/create.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: 'causes',
        pathMatch: 'full',
      },
      {
        path: 'causes',
        component: CausesComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
