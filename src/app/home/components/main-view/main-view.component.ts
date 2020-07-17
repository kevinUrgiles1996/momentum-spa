import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  introJS = introJs();

  constructor() {
    this.introJS.setOptions({
      steps: [
        {
          element: '#step1',
          intro: 'Aquí puedes ver la información de tu perfil',
          position: 'right',
        },
        {
          element: '#step2',
          intro: 'Consulta tus metas activas y terminadas',
          position: 'right',
        },
        {
          element: '#step3',
          intro: 'Modifica la visibilidad de la meta',
          position: 'right',
        },
        {
          element: '#step4',
          intro: 'Haz click aquí para agregar una nueva meta',
          position: 'left',
        },
        {
          element: '#step5',
          intro: 'Consulta notificaciones de reporte, débitos y recompensas',
          position: 'right',
        },
        {
          element: '#step6',
          intro: 'Lee publicaciones destacadas',
          position: 'right',
        },
      ],
      showProgress: true,
    });
  }

  ngOnInit(): void {}

  startTutorial() {
    this.introJS.start();
  }
}
