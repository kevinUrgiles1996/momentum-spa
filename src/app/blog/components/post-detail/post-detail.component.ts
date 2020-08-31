import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from '@core/services/post/post.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.edit = data.edit;
  }

  close(): void {
    this.dialogRef.close();
  }

  showSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  showError(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  deletePost(): void {
    const id = this.data._id;
    this.postServide.deletePost(id).subscribe((result: any) => {
      const { data, success } = result;
      if (success) {
        this.showSuccess('Publicación eliminada', 'success');
        this.close();
        this.router.navigate(['blog/public']);
      } else {
        this.showError('No se pudo eliminar la publicación', 'error');
      }
    });
  }

}
