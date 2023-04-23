import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss'],
})
export class WeatherReportComponent  implements OnInit {

  constructor(private userService: UsersService) { }

  city: any;
  weatherIcon: any;
  description: any;
  humidity: any;
  windSpeed: any;
  temperature: any;


  ngOnInit() {
    this.city = this.userService.city$.getValue();
    this.weatherIcon = this.userService.weatherIconId$.getValue();
    this.description = this.userService.weatherDescription$.getValue();
    this.humidity = this.userService.humidity$.value;
    this.windSpeed = this.userService.windSpeed$.value;
    this.temperature = this.userService.temperature$.value;
  }

}
