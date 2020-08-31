import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Cause } from '@core/interfaces/cause.interface';


@Injectable({
  providedIn: 'root'
})
export class CauseService {

  constructor(
    private http: HttpClient
  ) { }

  getCauses(){
    return this.http
      .get(`${environment.urlApi}/causes`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createCause(cause: Cause){
    return this.http
      .post(`${environment.urlApi}/causes`, cause)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError = (err: HttpErrorResponse) => {
    return throwError(err.error);
  }

}
