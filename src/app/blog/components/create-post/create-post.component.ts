import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import * as moment from 'moment';
import { PostService } from '@core/services/post/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  postToUpdate: any;

  addressForm = this.fb.group({
    title: [null, Validators.required],
    content: [null, Validators.required],
    likes: 0,
    imageURL: 'imageURL',
  });

  date: any;

  ngOnInit() {
    moment.locale('es');
    this.date = moment().format('dddd DD-MM-YYYY');
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private postService: PostService,
    private snackBar: MatSnackBar
  ) {}

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


  onSubmit(formValue: any) {
    const { title, content } = formValue;
    if (title && content && title.trim() && content.trim()) {
      this.postService.createPost(formValue).subscribe((result: any) => {
        const { data, success } = result;
        if (success) {
          this.showSuccess('Publicación creada', 'exit');
          this.router.navigate(['blog/me']);
        } else {
          this.showError('Error al crear la publicación', 'exit');
        }
      });
    } else {
      this.showError('Llene todos los campos!', 'exit');
    }
  }
}
