import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient) {}

  // Get all reports for user
  getReports(goalId: string) {
    return this.http
      .get(`${environment.urlApi}/reports/${goalId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError = (err: HttpErrorResponse) => {
    return throwError(err.error);
  }
}
