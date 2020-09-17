import { Component, OnInit } from '@angular/core';
import { TransactionService } from '@core/services/transaction/transaction.service';
import { Transaction } from '@core/interfaces/transaction.interface';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.transactionService.getTransactions()
      .subscribe((result: any) => {
        this.transactions = result.data;
      });
  }

}
