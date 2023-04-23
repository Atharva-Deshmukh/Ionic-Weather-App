import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  APIkey$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  lat$: BehaviorSubject<number> = new BehaviorSubject<number>(0.00000);
  lon$: BehaviorSubject<number> = new BehaviorSubject<number>(0.00000);
  city$: BehaviorSubject<string> = new BehaviorSubject<string>('Enter City');

  loginSuccess$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  weatherData: any;

  constructor(private http: HttpClient, private router: Router) { }

  signUpService(data: User) {
    return this.http.post('http://localhost:3000/users', data).subscribe((result) => {
    if(result) {
      console.warn('User created Successfully');
      this.router.navigate(['login']);
    }
    });
  }

  loginService(data: any) {
    return this.http.get(`http://localhost:3000/users/?email=${data.email}&password=${data.password}`, {observe:'response'}).subscribe((result: any) => {
    if(result && result.body && result.body.length) {
      console.warn('login SUCCESSFULL and user -> ', result);
      this.loginSuccess$.next(true);
      console.warn('this.loginSuccess$.next(true) -> ', this.loginSuccess$.value);

      localStorage.setItem('user',JSON.stringify(result.body))

      this.router.navigate(['user-dashboard']);
    } else {
      console.warn('login FAILED');
    }
    });

  }

  getWeatherService() {

    console.warn('this.lat$.value -> ', this.lat$.value);
    console.warn('this.lon$.value -> ', this.lon$.value);
    console.warn('this.APIkey$.value -> ', this.APIkey$.value);

    return this.http.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${this.lat$.value}&lon=${this.lon$.value}&appid=${this.APIkey$.getValue}`).subscribe((result) => {
      if(result) {
        console.warn('weather data -> ', result);
        this.weatherData = result;
        console.warn('main -> ',this.weatherData.main);

      }
    });

  }

}
