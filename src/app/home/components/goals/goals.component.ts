import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit{
  @Input() activeGoals: any[];
  @Input() inactiveGoals: any[];
  // activeGoals: any[] = [
  //   {
  //     id: 1,
  //     title: 'Trotar 45 minutos',
  //     public: false,
  //     currentWeek: 1,
  //     totalWeeks: 4,
  //     nextReportDate: '27 de Julio',
  //   },
  //   {
  //     id: 2,
  //     title: 'Leer 20 minutos',
  //     public: true,
  //     currentWeek: 3,
  //     totalWeeks: 4,
  //     nextReportDate: 'Hoy',
  //   },
  // ];

  // completedGoals: any[] = [
  //   {
  //     id: 3,
  //     title: 'Estudiar Algebra',
  //     public: true,
  //     nextReportDate: '',
  //     currentWeek: 6,
  //     totalWeeks: 6,
  //   },
  //   {
  //     id: 4,
  //     title: 'Dibujar',
  //     public: true,
  //     nextReportDate: '',
  //     currentWeek: 4,
  //     totalWeeks: 4,
  //   },
  // ];

  constructor() {}

  ngOnInit(): void {

  }

}
