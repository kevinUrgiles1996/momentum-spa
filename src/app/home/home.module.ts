import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { UserComponent } from './components/user/user.component';
import { MainViewComponent } from './components/main-view/main-view.component';

@NgModule({
  declarations: [BannerComponent, UserComponent, MainViewComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
