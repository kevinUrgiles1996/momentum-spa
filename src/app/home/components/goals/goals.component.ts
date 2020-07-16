import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit {
  activeGoals: any[] = [
    {
      title: 'Trotar 45 minutos',
      public: false,
      nextReportDate: '27 de Julio',
      currentWeek: 1,
      totalWeeks: 4,
    },
    {
      title: 'Leer 20 minutos',
      public: true,
      nextReportDate: 'Hoy',
      currentWeek: 3,
      totalWeeks: 4,
    },
  ];

  completedGoals: any[] = [
    {
      title: 'Estudiar Algebra',
      public: true,
      nextReportDate: '',
      currentWeek: 6,
      totalWeeks: 6,
    },
    {
      title: 'Dibujar',
      public: true,
      nextReportDate: '',
      currentWeek: 4,
      totalWeeks: 4,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
