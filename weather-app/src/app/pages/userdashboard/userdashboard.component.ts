import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss'],
})
export class UserdashboardComponent  implements OnInit {

  constructor(private router: Router) { }

  userDataString: any;
  userName: string = '';
  useremail: any;

  ngOnInit() {

    // get logged in user data in string form
    this.userDataString = localStorage.getItem('user')
    console.warn('user data String from localStorage -> ', this.userDataString);

    // convert string to JSON
    const userData = this.userDataString && JSON.parse(this.userDataString);
    console.warn('userData after JSON.Parse(userString) -> ', userData);

    // console this -> console.warn('userData -> ', userData); to understand the logic for below
    this.userName = userData[0].name;
    this.useremail = userData[0].email;

  }

  menuType: string = 'overlay';

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

}
