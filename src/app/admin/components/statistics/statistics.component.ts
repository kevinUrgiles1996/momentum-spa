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

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Personas que no han cumplido su meta',
    },
    {
      data: [],
      label: 'Personas que si han cumplido su meta',
    },
  ];


  statistics: Statistic[];
  constructor(private statisticSevice: StatisticService) {}

  ngOnInit(): void {
    this.statisticSevice.getStatistics()
      .subscribe((result: { success: boolean, data: Statistic[] }) => {
        const { success, data } = result;
        if (success){
          const labels = [];
          const met = [];
          const missed = [];
          data.forEach((value) => {
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
