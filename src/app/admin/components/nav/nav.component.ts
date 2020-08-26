import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AuthService } from '@core/services/auth/auth.service';
import { TokenService } from '@core/services/token/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {


  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map((result) => result.matches),
    shareReplay()
  );

  logout(){
    this.authService.logoutUser().subscribe((result: any) => {
      const { success } = result;
      if (success){
        this.tokenService.removeToken();
        location.reload();
      }
    });
  }
}
