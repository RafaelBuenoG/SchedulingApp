import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  weathers: any[] = [];

  constructor(private http: HttpClient) {
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    this.http.get('https://localhost:7158/weatherforecast').subscribe((data: any) => {
      console.log(data);
      this.weathers = data;
    })
  }
}
