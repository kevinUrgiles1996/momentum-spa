import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {StatisticService} from '@core/services/statistic/statistic.service';
import { AuthService } from '@core/services/auth/auth.service';
import {Statistic} from '@core/interfaces/statistic.interface';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  labels = [];
  met = [];
  missed = [];
  lines: number;
  content = [];

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];
  userId: string;

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
  constructor(
    private statisticSevice: StatisticService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.getUserInfo()
    .subscribe((result: any) => {
      this.userId = result.data._id;
      this.fetchData(this.userId);
    });
  }

  fetchData(userId: string){
    this.statisticSevice.getStatistics(userId)
    .subscribe((result: { success: boolean, data: Statistic[] }) => {
      const { success, data } = result;
      this.lines = data.length;
      if (success){
        data.forEach((value) => {
          this.labels.push(value.name);
          this.met.push(value.met);
          this.missed.push(value.missed);
        });
        this.barChartLabels = this.labels;
        this.barChartData[0].data = this.missed;
        this.barChartData[1].data = this.met;
        this.buildCsv();
      }
    });
  }

  downloadCsv(){
    const file = new Blob(this.content, { type: 'text/csv;charset=utf-8'});
    saveAs(file, 'file.csv');
  }

  buildCsv(){
    this.content.push('cause,met,missed\n');
    for (let i = 0; i < this.lines; i++){
      const label = this.labels[i];
      const missed = this.missed[i];
      const met = this.met[i];
      const line = `${label},${met},${missed}\n`;
      this.content.push(line);
    }
  }

  getImportedStatistics(){
    const lines = [];
    this.statisticSevice.getImportedStatistics()
      .subscribe((result: any) => {
        const { data } = result;
        data.forEach((element) => {
          lines.push(element);
        });
        const reportFile = new Blob(lines, {type: 'text/plain;charset=utf-8'});
        saveAs(reportFile, 'report.txt');
      });
  }
}
