import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { BlogRoutingModule } from './blog-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { ArticleComponent } from './components/article/article.component';


@NgModule({
  declarations: [BannerComponent, ArticleComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
  ],
  exports: [BannerComponent, MaterialModule],
})
export class BlogModule { }
