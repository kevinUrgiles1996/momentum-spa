import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  updateUserDetails(user: Partial<User>){
    return this.http
      .put(`${environment.urlApi}/auth/updatedetails`, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError = (err: HttpErrorResponse) => {
    return throwError(err.error);
  }

}
