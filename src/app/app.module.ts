import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@core/services/auth.interceptor';
import { JwtHelperService  } from '@auth0/angular-jwt';


@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    JwtHelperService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
