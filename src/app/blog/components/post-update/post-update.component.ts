import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '@core/services/post/post.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.title = this.data.title;
    this.content = this.data.content;
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
          this.showSuccess('Publicación actualizada', 'exit');
          this.dialogRef.close();
        } else {
          this.showError('No se pudo actualizar la publicación', 'error');
        }
      });
  }
}
