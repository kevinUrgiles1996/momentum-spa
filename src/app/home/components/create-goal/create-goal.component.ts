import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


import { GoalService } from '@core/services/goal/goal.service';
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
  causes: string[] = [
    'Solca niños contra el cancer',
    'Por una ciudad sin personas en la calle',
    'Amigos de 4 patas',
    'Juntos contra la pobreza',
    'Por una educación más justa',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private goalService: GoalService
  ) {}

  ngOnInit() {
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

    this.secondFormGroup.valueChanges.subscribe((changes) => {
      const {
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
  }

  getStartDateDays() {
    let currentDay = this.today;
    for (let i = 0; i < 7; i++) {
      this.startingDates.push(currentDay.format('dddd DD-MM-YYYY'));
      currentDay = currentDay.add('1', 'day');
    }
  }
}
