import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '@core/interfaces/goal.interface';
import * as moment from 'moment';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  @Input() goal: Goal;

  constructor() {
  }

  ngOnInit(): void {
  }

  getPercentage(){
    let percentage: number;
    const { startDate, endDate } = this.goal;
    const [firstDate, secondDate] = [moment(startDate), moment(endDate)];
    const totalDays = secondDate.diff(firstDate, 'days');
    const today = moment();
    if (today >= secondDate){
      percentage = 100;
    } else {
      const passedDays = today.diff(firstDate, 'days');
      percentage = (passedDays / totalDays) * 100;
    }
    return percentage;
  }

}
