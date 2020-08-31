import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


import { BlogRoutingModule } from './blog-routing.module';
import { MainViewComponent } from './components/main-view/main-view.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsUserComponent } from './components/posts-user/posts-user.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';

@NgModule({
  declarations: [
    MainViewComponent,
    PostComponent,
    CreatePostComponent,
    PostDetailComponent,
    PostsComponent,
    PostsUserComponent,
    PostUpdateComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [MainViewComponent, MaterialModule],
})
export class BlogModule { }
