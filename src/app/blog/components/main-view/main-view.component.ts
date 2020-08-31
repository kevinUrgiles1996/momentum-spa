import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  navLinks = [
    { path: 'public', label: 'Publicaciones' },
    { path: 'me', label: 'Mis publicaciones' },
    { path: 'create', label: 'Crear una publicación' },
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['blog/public']);
  }

}
