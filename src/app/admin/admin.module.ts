import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from './../material/material.module';

import { SharedModule } from '../shared/shared.module';

import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MaterialModule,
    SharedModule,
  ],
})
export class AdminModule {}
