import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private userService: UsersService) {}

  login() {

    if(localStorage.getItem('user')) {
      this.userService.loginSuccess$.next(true);
      this.router.navigate(['user-dashboard']);
    }
    else{
      this.router.navigate(['login']);
    }
  }

  signUp() {
    this.router.navigate(['signup']);
  }

}
