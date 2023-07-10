import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
// export class HomePage implements OnInit {
//   nomePagina = ''

//   constructor() { }

//   ngOnInit() {
//     this.nomePagina = 'Início';
//   }

// }

// Teste de API
export class HomePage {
  nomePagina = ''

  constructor(private apiService: ApiService) {
    // this.createData();
    // this.readData();
    // this.updateData();
    // this.deleteData();
  }

  createData() {
    const data: any = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    this.apiService.createData(data).subscribe(data => {
      console.log(data);
    })
  }

  readData() {
    this.apiService.readData().subscribe(data => {
      console.log(data);
    })
  }

  updateData() {
    const data: any = {
      id: '1',
      title: 'title',
      body: 'aaaa',
      userId: 12,
    };

    this.apiService.updateData(data).subscribe(data => {
      console.log(data);
    })
  }

  deleteData() {
    this.apiService.deleteData().subscribe(data => {
      console.log(data);
    })
  }

}
