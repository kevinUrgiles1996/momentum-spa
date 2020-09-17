import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '@core/interfaces/transaction.interface';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-transaction-statistics',
  templateUrl: './transaction-statistics.component.html',
  styleUrls: ['./transaction-statistics.component.scss']
})
export class TransactionStatisticsComponent implements OnInit {

  @Input() transactions: Transaction[] = [];

  transactionsNegative: number = 0;
  transactionsPositive: number = 0;

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = ["Transacciones"];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [],
      label: "Negativas",
    },
    {
      data: [],
      label: "Positivas",
    },
  ];

  constructor( ) { }

  ngOnInit(): void {
    this.transactions.forEach(transaction => {
      transaction.type === 'negative' ? this.transactionsNegative++ : this.transactionsPositive++;
    });
    this.barChartData[0].data.push(this.transactionsNegative);
    this.barChartData[1].data.push(this.transactionsPositive);
  }

}
