import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router';
import { ReportService } from '@core/services/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  doughnutChartLabels: Label[] = ['Reportes fallidos', 'Reportes exitosos'];
  doughnutChartData: MultiDataSet = [[1, 5]];
  doughnutChartType: ChartType = 'doughnut';

  wasSuccessful: boolean;
  goalId: string;
  reportForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private reportService: ReportService
  ) {
    this.buildForm();
    this.route.params.subscribe((params: Params) => {
      const { goalId } = params;
      this.goalId = goalId;
    });
  }

  ngOnInit(): void {
    this.reportForm.valueChanges.subscribe((changes) => {
      const { success } = changes;
      if (success === 'si') {
        this.wasSuccessful = true;
      } else {
        this.wasSuccessful = false;
      }
    });
  }

  buildForm(){
    this.reportForm = this.formBuilder.group({
      success: ['', Validators.required],
      photo: ['defaultLink', Validators.required],
      comment: ['', Validators.required],
    });
  }

  updateReport(event: Event){
    event.preventDefault();
    if (this.reportForm.valid){
      const { photo, comment } = this.reportForm.value;
      const body = {
        successful: this.wasSuccessful,
        imageUrl: photo,
        comment
      };
      this.reportService.updateReport(this.goalId, body)
        .subscribe((result) => {
          console.log(result);
        });
    }
  }
}
