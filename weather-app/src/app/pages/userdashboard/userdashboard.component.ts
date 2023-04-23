import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss'],
})
export class UserdashboardComponent  implements OnInit {

  constructor(private router: Router, private userService: UsersService) { }

  optionSelected: any;
  getOptionValue(event: any) {
    console.log(event.detail.value);
    this.optionSelected = event.detail.value;

    if(this.optionSelected === 'Pune') {
      this.getPuneWeather();
    }
  }

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

  // API key 0629ec7ef38cbe8dd23d15adb0b36f5f

  // lat long PUNE -> 18.5204° N, 73.8567° E
  // lat long MUMBAI -> 19.0760° N, 72.8777° E
  // lat long NAGPUR -> 21.1458° N, 79.0882° E
  // lat long CHANDRAPUR -> 19.9615° N, 79.2961° E

  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  lat: any;
  lon: any;
  APIkey: any;

  weatherData: any;

  getPuneWeather() {
    this.lat = 18.5204;
    this.lon =  73.8567;
    this.APIkey = '5c86033098ae966dd0e9f3ce5aefa8be';

    this.userService.getWeatherService(this.lat, this.lon, this.APIkey);

  }

}
