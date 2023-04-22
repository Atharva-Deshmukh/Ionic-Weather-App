import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  loginSuccess$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  signUpService(data: User) {
    return this.http.post('http://localhost:3000/users', data).subscribe((result) => {
    if(result) {
      console.warn('User created Successfully');
      this.router.navigate(['login']);
    }
    });
  }

  loginService(data: User) {
    return this.http.get(`http://localhost:3000/users/?${data.email}&${data.password}`).subscribe((result) => {
    if(result) {
      console.warn('login SUCCESSFULL and user -> ', result);
      this.loginSuccess$.next(true);
      console.warn('this.loginSuccess$.next(true) -> ', this.loginSuccess$.value);
      this.router.navigate(['user-dashboard']);
    }
    });

  }

}
