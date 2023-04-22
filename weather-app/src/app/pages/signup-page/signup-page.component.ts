import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent  implements OnInit {

  ngOnInit() {}

  myForm: FormGroup;

  constructor(private userService: UsersService) {

    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
      });

}

  signUp(data: User) {
    console.warn('SignUp data -> ', data);
    this.userService.signUpService(data);
  }

}
