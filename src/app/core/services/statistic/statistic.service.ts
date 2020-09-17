import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Statistic } from '@core/interfaces/statistic.interface';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(
    private http: HttpClient
  ) { }

  getStatistics(){
    return this.http
      .get(`${environment.urlStatisticsApi}/statistics`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createStatistic(statistic: Statistic){
    return this.http
      .post(`${environment.urlStatisticsApi}/statistics`, statistic)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError = (err: HttpErrorResponse) => {
    return throwError(err.error);
  }

}
