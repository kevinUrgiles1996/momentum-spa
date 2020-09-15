import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient
  ) { }

  getTodayReport(goalId: string){
    return this.http
      .get(`${environment.urlApi}/reports/today/${goalId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateReport(goalId: string, body: any){
    return this.http
      .patch(`${environment.urlApi}/reports/${goalId}`, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError = (err: HttpErrorResponse) => {
    return throwError(err.error);
  }

}
