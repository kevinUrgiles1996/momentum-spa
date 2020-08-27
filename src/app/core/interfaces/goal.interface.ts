export enum reportFrequency{
  daily = 'daily',
  weekly = 'weekly',
}

export interface Goal {
  name: string;
  category: string;
  description: string;
  reportFrequency: reportFrequency;
  startDate: Date;
  endDate: Date;
  moneyStake ?: number;
  active ?: boolean;
  successful ?: boolean;
  user ?: string;
  cause ?: string;
}
