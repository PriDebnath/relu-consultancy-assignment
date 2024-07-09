import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './module/auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtTokenInterceptor } from './module/auth/interceptors/jwt-token.interceptor';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HttpClientModule],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true }, // Register your interceptor
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
