import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
import { TokenService } from '../services/token/token.service';

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleBaseGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot){
    const expectedRole = route.data.expectedRole;
    const token = this.tokenService.getToken();
    const tokenPayload = token ? decode(token) : {};

    const { role } = tokenPayload;
    const isAuthenticated = this.authService.isAuthenticated();
    const isRoleAuthorized = role === expectedRole;

    if (!isAuthenticated){
      this.router.navigate(['/auth/login']);
      return false;
    }

    else if (!isRoleAuthorized){
      const redirection = role === 'user' ? '/' : '/admin';
      this.router.navigate([redirection]);
      return false;
    }

    return true;
  }
}
