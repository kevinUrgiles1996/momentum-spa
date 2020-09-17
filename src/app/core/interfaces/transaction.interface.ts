export interface Transaction {
  _id: string;
  type: string;
  amount: number;
  goal: any;
  user: string;
  transactionDate: Date;
}