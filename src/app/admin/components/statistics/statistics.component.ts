import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {StatisticService} from "../../../core/services/statistic/statistic.service";
import {Statistic} from "../../../core/interfaces/statistic.interface";

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
    /*'Niños contra el cancer',
    'Menos personas viviendo en las calles',
    'Amigos de 4 patas',
    'Por una educación más justa',
    'Ecuador más conectado',
    'Por una infancia sin hambre',*/
  ];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [
        //50, 70, 40, 40, 16, 33
      ],
      label: 'Personas que no han cumplido su meta',
    },
    {
      data: [
        //50, 30, 20, 10, 14, 17
      ],
      label: 'Personas que si han cumplido su meta',
    },
  ];


  statistics: Statistic[];
  //barChartLabels: Label[] = new Array();
  constructor(private statisticSevice: StatisticService) {}

  ngOnInit(): void {
    this.statisticSevice.getStatistics()
      .subscribe((result: { success: boolean, data: Statistic[] }) => {
        const { success, data } = result;
        if (success){
          this.statistics = data;
          var labels = new Array(this.statistics.length);
          var met = new Array(this.statistics.length);
          var missed = new Array(this.statistics.length);
          data.forEach(function(value) {
            console.log(value);
            labels.push(value.name);
            missed.push(value.missed);
            met.push(value.met);
          });
          this.barChartLabels = labels;
          this.barChartData[0].data = missed;
          this.barChartData[1].data = met;
        }
      });
  }
}
