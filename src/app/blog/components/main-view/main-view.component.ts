import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../article/article.model';

@Component({
  selector: 'app-banner',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit{

  articulos: Article[];
  busqueda: any = '';

  getArticulos(): void {
    fetch('../../assets/articulos.json')
      .then( response => {
          return response.json();
      })
      .then( arreglo => {
        this.articulos = arreglo;
      })
      .catch(err => {
        console.log(err.message);
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
        result.length > 0 ?  this.articulos = result : alert(`No se encontraron articulos referentes a ${this.busqueda}`);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  constructor() { }

  ngOnInit(): void {
    this.getArticulos();
  }

}
