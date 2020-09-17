import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '@core/interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-description',
  templateUrl: './transaction-description.component.html',
  styleUrls: ['./transaction-description.component.scss']
})
export class TransactionDescriptionComponent implements OnInit {

  @Input() transaction: Transaction;

  goalName: string;
  transactionType: string;
  transactionDate: Date;
  transactionAmount: number;
  isDebit: boolean;

  constructor() { }

  ngOnInit(): void {
    this.goalName = this.transaction.goal.name;
    this.transactionType = this.transaction.type;
    this.transactionDate = this.transaction.transactionDate;
    this.transactionAmount = this.transaction.amount;
    this.isDebit = this.transactionType === 'negative';
  }

}
