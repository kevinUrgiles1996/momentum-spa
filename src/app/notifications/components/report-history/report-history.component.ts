import { Component, OnInit } from '@angular/core';
import { ReportService } from '@core/services/report/report.service';
import { Report } from '@core/interfaces/report.interface';
import { GoalService } from '@core/services/goal/goal.service';

@Component({
  selector: 'app-report-history',
  templateUrl: './report-history.component.html',
  styleUrls: ['./report-history.component.scss'],
})
export class ReportHistoryComponent implements OnInit {
  reports: Report[] = [];
  reportsSpinnerVisible = true;
  constructor(
    private reportService: ReportService,
    private goalService: GoalService
  ) {}

  ngOnInit(): void {
    this.getReports();
  }

  getReports(): void {
    this.goalService.getUserGoals().subscribe((resultGoals: any) => {
      const { data, success } = resultGoals;
      if (success) {
        data.forEach((goal) => {
          this.reportService
            .getReports(goal._id)
            .subscribe((resultReports: any) => {
              const {
                data: dataReports,
                success: successReports,
              } = resultReports;
              if (successReports) {
                this.reportsSpinnerVisible = false;
                dataReports.forEach((report) => {
                  report.date = report.date.substring(0, 10);
                  this.reports.push(report);
                });
              }
            });
        });
      }
    });
  }
}
