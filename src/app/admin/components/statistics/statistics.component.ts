import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [
    'Niños contra el cancer',
    'Menos personas viviendo en las calles',
    'Amigos de 4 patas',
    'Por una educación más justa',
    'Ecuador más conectado',
    'Por una infancia sin hambre',
  ];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [50, 70, 40, 40, 16, 33],
      label: 'Personas que no han cumplido su meta',
    },
    {
      data: [50, 30, 20, 10, 14, 17],
      label: 'Personas que si han cumplido su meta',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
