import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { Goal, reportFrequency } from '@core/interfaces/goal.interface';
import { GoalService } from '@core/services/goal/goal.service';
import { CauseService } from '@core/services/cause/cause.service';
import { Cause } from '@core/interfaces/cause.interface';
import * as moment from 'moment';


@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class CreateGoalComponent implements OnInit {

  newGoal: Goal = {
    name: '',
    category: '',
    description: '',
    reportFrequency: reportFrequency.daily,
    startDate: new Date(),
    endDate: new Date(),
  };

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  // For daily reports only
  dailyReport = false;
  totalDailyDays = 0;

  // For weekly reports only
  weeklyReport = false;
  weekDay: string;
  totalWeeks: number;

  // To show how much money the user could donate to a cause
  choosenStake: string;
  moneyStake = 1;
  totalDonation: number;

  today: any;
  startingDates: any[] = [];
  causes: Cause[];

  constructor(
    private formBuilder: FormBuilder,
    private goalService: GoalService,
    private causeService: CauseService,
  ) {
    this.buildForm();
  }

  ngOnInit() {

    this.secondFormGroup.valueChanges.subscribe((changes) => {
      const {
        // tslint:disable-next-line: no-shadowed-variable
        reportFrequency,
        startDate,
        endDate,
        startingWeekDay,
        totalWeeks,
      } = changes;
      if (reportFrequency === 'daily') {
        this.dailyReport = true;
        this.weeklyReport = false;
      } else {
        this.weeklyReport = true;
        this.dailyReport = false;
      }
      if (startDate && endDate) {
        const firstDate = moment(startDate);
        const secondDate = moment(endDate);
        this.totalDailyDays = secondDate.diff(firstDate, 'days');
      }
      if (startingWeekDay) {
        this.weekDay = startingWeekDay.split(' ')[0];
      }

      if (totalWeeks) {
        this.totalWeeks = totalWeeks;
      }
    });

    this.thirdFormGroup.valueChanges.subscribe((changes) => {
      const { stakeType, quantity } = changes;
      if (stakeType) {
        this.choosenStake = stakeType;
      }

      if (quantity) {
        this.moneyStake = quantity;
      }

      if (this.dailyReport) {
        this.totalDonation = quantity * this.totalDailyDays;
      } else {
        this.totalDonation = quantity * this.totalWeeks;
      }
    });

    this.causeService.getCauses()
      .subscribe((result: { success: boolean, data: any }) => {
        const { success, data } = result;
        if (success){
          this.causes = data;
        }
      });

  }

  buildForm(){
    moment.locale('es');
    this.today = moment();
    this.getStartDateDays();

    this.firstFormGroup = this.formBuilder.group({
      goalName: ['', Validators.required],
      goalCategory: ['', Validators.required],
      goalDescription: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      reportFrequency: ['', Validators.required],
      startDate: [''], // For daily reports only
      endDate: [''], // For daily reports only
      startingWeekDay: [''], // For weekly reports only
      totalWeeks: ['1'], // For weekly reports only
    });
    this.thirdFormGroup = this.formBuilder.group({
      stakeType: ['', Validators.required],
      cause: ['', Validators.required],
      quantity: ['1', Validators.required],
      accept: ['', Validators.required],
    });
  }

  getStartDateDays() {
    let currentDay = this.today;
    for (let i = 0; i < 7; i++) {
      this.startingDates.push(currentDay.format('dddd DD-MM-YYYY'));
      currentDay = currentDay.add('1', 'day');
    }
  }

  // Handling submitions

  getFirstGroupValues(){
    const { goalName, goalCategory, goalDescription } = this.firstFormGroup.value;
    this.newGoal.name = goalName;
    this.newGoal.category = goalCategory;
    this.newGoal.description = goalDescription;
  }

  getSecondGroupValues(){
    const { reportFrequency, startDate, endDate } = this.secondFormGroup.value;
    this.newGoal.reportFrequency = reportFrequency;
    this.newGoal.startDate = startDate;
    this.newGoal.endDate = endDate;
  }

  getThirdGroupValues(){
    const { quantity, cause } = this.thirdFormGroup.value;
    this.newGoal.moneyStake = quantity;
    this.newGoal.cause = '5c8a1d5b0190b214360dc036';
    this.goalService.createGoal(this.newGoal)
      .subscribe((result) => {
        console.log(result);
      })
  }

}
