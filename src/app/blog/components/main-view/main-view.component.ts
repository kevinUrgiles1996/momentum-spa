import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../article/article.model';
import { PostService } from '@core/services/post/post.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-banner',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit{

  posts: Article[];
  postsUser: Article[];
  busqueda: any = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {

    this.postService.getPosts()
      .subscribe((result: any) => {
        const { data, success } = result;
        if (success){
          this.posts = data;
        }
      });

    this.postService.getUserPosts()
      .subscribe((result: any) => {
        const { data, success } = result;
        if(success) {
          console.log(data);
          this.postsUser = data;
        }
      });

  }

  buscarArticulo(e: Event) {
    e.preventDefault();
    fetch('../../assets/articulos.json')
      .then( response => {
          return response.json();
      })
      .then( arreglo => {
        const result = arreglo.filter(item => item.title.toLowerCase().includes(this.busqueda.trim().toLowerCase()));
        result.length > 0 ?  this.posts = result : alert(`No se encontraron articulos referentes a ${this.busqueda}`);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

}
