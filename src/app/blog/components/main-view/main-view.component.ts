import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../article/article.model';

@Component({
  selector: 'app-banner',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit{

  articulos: Article[] = [
    {
      title: '5 Tips para alcanzar tus objetivos sin rendirte',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of dog from Japan. A small, agile dog that copes very well with
      mountainous terrain, the Shiba Inu was originally bred for hunting.`,
      author: 'Gary Barzola',
      starts: 5,
      date: '12/07/20',
    },
    {
      title: 'Consejos para complir tus metas con éxito',
      description: ` A small, agile dog that copes very well with
      mountainous terrain, the Shiba Inu was originally bred for hunting.
      A small, agile dog that copes very well with
      mountainous terrain, the Shiba Inu was originally bred for hunting.`,
      author: 'Juan Lara',
      starts: 3,
      date: '20/07/20',
    },
  ];

  busqueda: any = '';

  buscarArticulo(e: Event) {
    console.log(this.busqueda);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
