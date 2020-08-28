import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './components/main-view/main-view.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsUserComponent } from './components/posts-user/posts-user.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'public',
        component: PostsComponent
      },
      {
        path: 'me',
        component: PostsUserComponent
      },
      {
        path: 'create',
        component: CreatePostComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
