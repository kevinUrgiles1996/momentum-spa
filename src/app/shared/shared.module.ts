import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [HeaderComponent, NotAuthorizedComponent, NotFoundComponent, ConfirmDialogComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [HeaderComponent, MaterialModule],
})
export class SharedModule {}
