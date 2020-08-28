import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Post } from './post.model';
import { MatDialog } from '@angular/material/dialog';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { PostUpdateComponent } from '../post-update/post-update.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() edit: boolean;

  constructor(public dialog: MatDialog, private router: Router) {}

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
}
