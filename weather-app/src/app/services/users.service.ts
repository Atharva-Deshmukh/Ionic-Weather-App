import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  signUpService(data: User) {
    return this.http.post('http://localhost:3000/users', data).subscribe((result) => {
    if(result) {
      console.warn('User created Successfully');
    }
    });
  }


}
