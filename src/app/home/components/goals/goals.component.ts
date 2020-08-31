import { Component, OnInit, Input } from '@angular/core';

import { Goal } from '@core/interfaces/goal.interface';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit{
  @Input() activeGoals: Goal[];
  @Input() inactiveGoals: Goal[];

  constructor() {}

  ngOnInit(): void {

  }

}
