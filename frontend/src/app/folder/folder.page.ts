import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  weathers: any = []

  constructor(private http: HttpClient) {
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    this.http.get('https://localhost:7158/weatherforecast').subscribe((data: any) => {
      console.log(data);
      this.weathers = data;
    })
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
