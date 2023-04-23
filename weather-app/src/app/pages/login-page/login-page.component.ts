import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/Login';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent  implements OnInit {

  myForm: FormGroup;

  constructor(private userService: UsersService) {

    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
      });

}

  login(data: Login) {

    console.warn('Login credentials -> ', data);
    this.userService.loginService(data);
  }


  ngOnInit() {}

}
