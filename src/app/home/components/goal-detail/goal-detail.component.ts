import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GoalService } from '@core/services/goal/goal.service';
import { Goal } from '@core/interfaces/goal.interface';
import { Cause } from '@core/interfaces/cause.interface';

import * as moment from 'moment';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss'],
})
export class GoalDetailComponent implements OnInit {

  reportSpinner = './../../../../assets/images/spinner3.svg';
  goalSpinner = './../../../../assets/images/spinner3.svg';

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private goalService: GoalService
    ) {
      moment.locale('es');
    }


  goal: any;
  cause: Cause;
  reports: any;

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: this.goal,
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const { goalId } = params;
      this.goalService.getUserGoal(goalId)
        .subscribe((result: { success: boolean, data: any }) => {
          const { success, data } = result;
          if (success){
            this.goal = this.formatGoal(data);
            this.cause = data.cause;
            this.goalSpinner = '';
          }
        });
      this.goalService.getGoalReports(goalId)
        .subscribe((result: { success: boolean, data: any }) => {
          const { success, data } = result;
          if (success){
            this.reports = data;
            this.reportSpinner = '';
          }
        });
    });
  }

  formatGoal(goal: Goal){
    const startDateFormatted = moment(goal.startDate).format('dddd DD-MM-YYYY');
    const endDateFormatted = moment(goal.endDate).format('dddd DD-MM-YYYY');
    const duration = moment(goal.endDate).diff(moment(goal.startDate), 'days');
    const goalFormatted = {
      ...goal,
      startDate: startDateFormatted,
      endDate: endDateFormatted,
      duration
    };
    return goalFormatted;
  }


}

@Component({
  selector: 'dialog-data-example-dialog',
  template: `<h1 mat-dialog-title>Detalles de la meta</h1>
    <div mat-dialog-content>
      <p><strong>Fecha de inicio: </strong>{{ data.startDate }}</p>
      <p><strong>Fecha de culminación: </strong> {{ data.endDate }}</p>
      <p><strong>Duración: </strong>{{ data.duration }} días</p>
      <p><strong>Reporte: </strong>{{ data.reportFrequency ? 'Diario': 'Semanal' }}</p>
    </div>`,
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
