import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '@core/services/post/post.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.scss'],
})
export class PostUpdateComponent {
  title: string;
  content: string;

  constructor(
    public dialogRef: MatDialogRef<PostUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private postServide: PostService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  close(): void {
    this.data.title = this.title;
    this.data.content = this.content;
    this.dialogRef.close();
  }

  updatePost(): void {
    const id = this.data._id;
    this.postServide
      .updatePost(id, { title: this.data.title, content: this.data.content })
      .subscribe((result: any) => {
        const { data, success } = result;
        if (success) {
          this.toastr.success('Publicación actualizada.');
          this.dialogRef.close();
        } else {
          this.toastr.error('No se pudo eliminar la publicación.');
        }
      });
  }
}
