import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions(){
    return this.http
      .get(`${environment.urlApi}/transactions`)
      .pipe(catchError(this.handleError));
  }

  private handleError = (err: HttpErrorResponse) => {
    return throwError(err.error);
  }
}
