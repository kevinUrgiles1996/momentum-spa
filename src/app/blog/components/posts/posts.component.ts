import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { PostService } from '@core/services/post/post.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  busqueda: string;

  constructor(private postService: PostService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.postService.getPostsAll().subscribe((result: any) => {
      const { data, success } = result;
      if (success) {
        this.posts = data;
      }
    });
  }

  buscarArticulo(e: Event) {
    e.preventDefault();
    const result = this.posts.filter((item) =>
      item.title.toLowerCase().includes(this.busqueda.trim().toLowerCase())
    );
    result.length > 0 ? (this.posts = result) : this.toastr.info('No se encontraron resultados');

  }

}
