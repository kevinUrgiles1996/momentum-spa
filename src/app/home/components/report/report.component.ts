import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  reportForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reportForm = this.formBuilder.group({
      success: ['', Validators.required],
      photo: [''],
      comment: ['', Validators.required],
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
}
