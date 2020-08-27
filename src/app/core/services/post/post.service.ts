import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  // Get all posts
  getPosts() {
    return this.http
      .get(`${environment.urlApi}/posts`)
      .pipe(catchError(this.handleError));
  }

  // Get posts for userId
  getUserPosts() {
    return this.http
      .get(`${environment.urlApi}/posts/userposts`)
      .pipe(catchError(this.handleError));
  }

  getPost(postId: string) {
    return this.http
      .get(`${environment.urlApi}/posts/${postId}`)
      .pipe(catchError(this.handleError));
  }

  createPost(newPost: any) {
    return this.http
      .post(`${environment.urlApi}/posts`, newPost)
      .pipe(catchError(this.handleError));
  }

  deletePost(postId: string) {
    return this.http
      .delete(`${environment.urlApi}/posts/${postId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError = (err: HttpErrorResponse) => {
    return throwError(err.error);
  }
}
