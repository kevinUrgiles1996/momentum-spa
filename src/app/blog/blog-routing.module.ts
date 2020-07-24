import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './components/main-view/main-view.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';


const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
  },
  {
    path: 'create',
    component: CreateArticleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
