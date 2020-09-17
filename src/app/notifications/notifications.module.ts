import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ReportHistoryComponent } from './components/report-history/report-history.component';
import { TransactionDescriptionComponent } from './components/transaction-description/transaction-description.component';

@NgModule({
  declarations: [
    SideNavComponent,
    TransactionsComponent,
    ReportHistoryComponent,
    TransactionDescriptionComponent,
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    SharedModule,
    RouterModule,
  ],
})
export class NotificationsModule {}
