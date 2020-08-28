import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


import { BlogRoutingModule } from './blog-routing.module';
import { MainViewComponent } from './components/main-view/main-view.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

@NgModule({
  declarations: [MainViewComponent, PostComponent, CreatePostComponent, PostDetailComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [MainViewComponent, MaterialModule],
})
export class BlogModule { }
