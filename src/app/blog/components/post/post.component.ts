import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Post } from './post.model';
import { MatDialog } from '@angular/material/dialog';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { PostUpdateComponent } from '../post-update/post-update.component';

import { PostService } from '@core/services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {


  @Input() post: Post | null;
  @Input() edit: boolean;

  constructor(
    public dialog: MatDialog,
    private postService: PostService
  ) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(PostDetailComponent, {
      data: { edit: this.edit, ...this.post },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The view post was closed');
    });
  }

  editPost() {
    const dialogRef = this.dialog.open(PostUpdateComponent, {
      width: '77%',
      data: this.post
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The view post edit was closed');
    });
  }

  deletePost(){
    this.postService.deletePost(this.post._id)
      .subscribe((result: { success: boolean, data: any }) => {
        const { success, data } = result;
        if (success){
          this.post = null;
        }
      });
  }
}
