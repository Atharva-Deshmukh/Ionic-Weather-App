import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations:
  [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  imports:
  [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule],
  providers:
  [
    {
      provide: RouteReuseStrategy, useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
