import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(){
    console.log(`${environment.urlApi}/posts`);
    return this.http
      .get(`${environment.urlApi}/posts`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUserGoals(){
    return this.http
      .get(`${environment.urlApi}/goals`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUserGoal(goalId: string){
    return this.http
      .get(`${environment.urlApi}/goals/${goalId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createGoal(newGoal: any){
    return this.http
      .post(`${environment.urlApi}/goals`, newGoal)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError = (err: HttpErrorResponse) => {
    return throwError(err.error);
  }
}
