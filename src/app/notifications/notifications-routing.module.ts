import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ReportHistoryComponent } from './components/report-history/report-history.component';

const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      {
        path: '',
        redirectTo: 'history',
        pathMatch: 'full',
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
      },
      {
        path: 'history',
        component: ReportHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsRoutingModule {}
