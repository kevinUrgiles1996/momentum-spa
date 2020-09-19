import { Component, OnInit } from '@angular/core';
import { TransactionService } from '@core/services/transaction/transaction.service';
import { Transaction } from '@core/interfaces/transaction.interface';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = [''];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  positives = 0;
  negatives = 0;

  barChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Transacciones negativas',
    },
    {
      data: [],
      label: 'Transacciones positivas',
    },
    {
      data: [0],
      label: 'Otras',
    },
  ];

  transactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.transactionService.getTransactions()
      .subscribe((result: any) => {
        this.transactions = result.data;
        this.transactions.forEach((transaction) => {
          const { type } = transaction;
          if (type === 'positive'){
            this.positives += 1;
          } else {
            this.negatives += 1;
          }
        });
        this.barChartData[0].data.push(this.negatives);
        this.barChartData[1].data.push(this.positives);

      });
  }

}
