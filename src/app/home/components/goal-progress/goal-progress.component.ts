import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

import { Cause } from '@core/interfaces/cause.interface';


@Component({
  selector: 'app-goal-progress',
  templateUrl: './goal-progress.component.html',
  styleUrls: ['./goal-progress.component.scss'],
})
export class GoalProgressComponent implements OnInit {



  @Input() cause: Cause;
  @Input() reports: any;
  successful = 0;
  failed = 0;
  successRate: number;

  doughnutChartLabels: Label[] = ['Reportes fallidos', 'Reportes exitosos'];
  doughnutChartData: MultiDataSet = [[0, 0]];
  doughnutChartType: ChartType = 'doughnut';

  constructor() {

  }

  ngOnInit(): void {
    this.reports.forEach((report) => {
      const { successful } = report;
      if (successful){
        this.successful += 1;
      } else {
        this.failed += 1;
      }
    });
    this.doughnutChartData = [[this.failed, this.successful]];
    this.successRate = (this.successful / (this.successful + this.failed) ) * 100;
  }
}
