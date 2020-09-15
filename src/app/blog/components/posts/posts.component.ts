import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { PostService } from '@core/services/post/post.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postSpinner = './../../../../assets/images/spinner3.svg';
  posts: Post[];
  busqueda: string;

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getData();
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

  getData() {
    this.postService.getPostsAll().subscribe((result: any) => {
      const { data, success } = result;
      if (success) {
        this.posts = data;
        this.postSpinner = '';
      }
    });
  }

  buscarArticulo(e: Event) {
    e.preventDefault();
    const result = this.posts.filter((item) =>
      item.title.toLowerCase().includes(this.busqueda.trim().toLowerCase())
    );
    result.length > 0 ? (this.posts = result) : this.showError('No se encontraron resultados', 'error');

  }

}
