import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-agendas',
  templateUrl: './minhas-agendas.page.html',
  styleUrls: ['./minhas-agendas.page.scss'],
})
export class MinhasAgendasPage implements OnInit {
  nomePagina = ''

  constructor() { }

  ngOnInit() {
    this.nomePagina = 'Minhas Agendas';
  }

}
