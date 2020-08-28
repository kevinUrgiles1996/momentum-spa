import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model';
import {MatDialog} from '@angular/material/dialog';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() edit: boolean;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(PostDetailComponent, {
      data: {edit: this.edit, ...this.post}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.post = result;
    });

  }
}
