import { Component, OnInit } from '@angular/core';
import { Post } from '../../../core/interfaces/post.interface';
import { PostService } from '@core/services/post/post.service';

@Component({
  selector: 'app-posts-user',
  templateUrl: './posts-user.component.html',
  styleUrls: ['./posts-user.component.scss'],
})
export class PostsUserComponent implements OnInit {
  postSpinnerVisible = true;
  postsUser: Post[];
  lenghtPostUser: number;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.postService.getUserPosts().subscribe((result: any) => {
      const { data, success } = result;
      if (success) {
        this.postsUser = data;
        this.postSpinnerVisible = false;
        this.lenghtPostUser = this.postsUser.length;
      }
    });
  }
}
