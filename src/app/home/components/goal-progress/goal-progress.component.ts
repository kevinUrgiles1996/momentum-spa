import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-goal-progress',
  templateUrl: './goal-progress.component.html',
  styleUrls: ['./goal-progress.component.scss'],
})
export class GoalProgressComponent implements OnInit {
  doughnutChartLabels: Label[] = ['Reportes fallidos', 'Reportes exitosos'];
  doughnutChartData: MultiDataSet = [[1, 5]];
  doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit(): void {}
}
