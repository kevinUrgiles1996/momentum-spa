import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from '@core/services/post/post.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PostsUserComponent } from '../posts-user/posts-user.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
  edit: boolean;

  constructor(
    public dialogRef: MatDialogRef<PostDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private postServide: PostService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.edit = data.edit;
  }

  close(): void {
    this.dialogRef.close();
  }

  deletePost(): void {
    const id = this.data._id;
    this.postServide.deletePost(id).subscribe((result: any) => {
      const { data, success } = result;
      if (success) {
        this.toastr.success('Publicación eliminada.');
        this.close();
        this.onRefresh();
      } else {
        this.toastr.error('No se pudo eliminar la publicación.');
      }
    });
  }

  onRefresh(): void {

  }
}
