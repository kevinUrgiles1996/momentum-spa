import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article = {
    title: '5 Tips para alcanzar tus objetivos sin rendirte',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz
    breeds of dog from Japan. A small, agile dog that copes very well with
    mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    author: 'Gary Barzola',
    starts: 5,
    date: '12/07/20',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
