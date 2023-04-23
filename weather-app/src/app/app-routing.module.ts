import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { UserdashboardComponent } from './pages/userdashboard/userdashboard.component';
import { UserGuardGuard } from './Authguards/user-guard.guard';
import { HomePage } from './home/home.page';
import { WeatherReportComponent } from './pages/weather-report/weather-report.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
   component: HomePage
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: 'user-dashboard',
    component: UserdashboardComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'weather-report',
    component: WeatherReportComponent,
    canActivate: [UserGuardGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
