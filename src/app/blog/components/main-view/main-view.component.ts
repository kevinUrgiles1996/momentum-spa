import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post/post.model';
import { PostService } from '@core/services/post/post.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-banner',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  posts: Post[];
  postsUser: Post[];
  busqueda: any = '';

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getUserPosts().subscribe((result: any) => {
      const { data, success } = result;
      if (success) {
        this.postsUser = data;
      }
    });

    this.postService.getPostsAll().subscribe((result: any) => {
      const { data, success } = result;
      if (success) {
        this.posts = data;
      }
    });
  }

  buscarArticulo(e: Event) {
    e.preventDefault();
    // fetch('../../assets/articulos.json')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((arreglo) => {
    //     const result = arreglo.filter((item) =>
    //       item.title.toLowerCase().includes(this.busqueda.trim().toLowerCase())
    //     );
    //     result.length > 0
    //       ? (this.posts = result)
    //       : alert(`No se encontraron articulos referentes a ${this.busqueda}`);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  }
}
