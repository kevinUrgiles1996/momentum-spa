import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { TokenService } from '@core/services/token/token.service';
import { JwtHelperService } from '@auth0/angular-jwt';

import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private http: HttpClient,
      private tokenService: TokenService
  ) { }

  getUserInfo(){
    return this.http
      .get(`${environment.urlApi}/auth/me`)
      .pipe(
        catchError(this.handleError)
      );
  }

  loginUser(email: string, password: string){
    return this.http
            .post(`${environment.urlApi}/auth/login`, { email, password })
            .pipe(
              tap((data: { token: string, success: string }) => {
                const { token } = data;
                this.tokenService.saveToken(token);
              }),
              catchError(this.handleError)
            );
  }

  logoutUser(){
    return this.http.get(`${environment.urlApi}/auth/logout`)
                .pipe(
                  catchError(this.handleError)
                );
  }

  signUpUser(
    name: string,
    email: string,
    password: string,
    gender: string,
    role: string
  ){
    const body = { name, email, password, gender, role };
    return this.http
            .post(`${environment.urlApi}/auth/register`, body)
            .pipe(
              tap((data: { token: string, success: string }) => {
                const { token } = data;
                this.tokenService.saveToken(token);
              }),
              catchError(this.handleError)
            );
  }

  sendResetPasswordEmail(email: string){
    const body = { email };
    return this.http
              .post(`${environment.urlApi}/auth/forgotpassword`, body)
              .pipe(
                catchError(this.handleError)
              );
  }

  resetPassword(newPassword: string, resetToken: string){
    const body = { password: newPassword };
    return this.http
                  .put(`${environment.urlApi}/auth/resetpassword/${resetToken}`, body)
                  .pipe(
                    catchError(this.handleError)
                  );
  }

  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = this.tokenService.getToken();
    return !helper.isTokenExpired(token);
  }

  private handleError = (err: HttpErrorResponse) => {
    return throwError(err.error);
  }

}
