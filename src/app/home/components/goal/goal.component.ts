import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '@core/interfaces/goal.interface';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  @Input() goal: Goal;

  constructor() {}

  ngOnInit(): void {}
}
