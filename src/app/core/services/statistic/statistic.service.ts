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

  getImportedStatistics(){
    return this.http
      .get(`${environment.urlApi}/statistics`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getStatistics(adminId: string){
    return this.http
      .get(`${environment.urlStatisticsApi}/statistics/${adminId}`)
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
