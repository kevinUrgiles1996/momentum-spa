import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '@angular/cdk/layout';

import { SharedModule } from '../shared/shared.module';

import { NavComponent } from './components/nav/nav.component';
import { CausesComponent } from './components/causes/causes.component';
import { CreateComponent } from './components/create/create.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    NavComponent,
    CausesComponent,
    CreateComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    SharedModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
})
export class AdminModule {}
