import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as moment from 'moment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  today: any;
  startDateDays: any[] = [];
  causes: string[] = [
    'Solca niños contra el cancer',
    'Por una ciudad sin personas en la calle',
    'Amigos de 4 patas',
    'Juntos contra la pobreza',
    'Por una educación más justa',
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.today = moment();
    this.getStartDateDays();
    this.firstFormGroup = this.formBuilder.group({
      goal: ['', Validators.required],
      commitment: ['', Validators.required],
      category: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      reportFrequency: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startDateDay: ['', Validators.required],
      goalDurationDays: ['1', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      stakeType: ['', Validators.required],
      cause: ['', Validators.required],
      quantity: ['4', Validators.required],
      accept: ['', Validators.required],
    });
  }

  getStartDateDays() {
    let currentDay = this.today;
    for (let i = 0; i < 7; i++) {
      this.startDateDays.push(currentDay.format('dddd DD-MM-YYYY'));
      currentDay = currentDay.add('1', 'day');
    }
  }
}
