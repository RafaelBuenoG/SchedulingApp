import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-agendas',
  templateUrl: './minhas-agendas.page.html',
  styleUrls: ['./minhas-agendas.page.scss'],
})
export class MinhasAgendasPage implements OnInit {
  nomePagina = ''
  handlerMessage = '';
  roleMessage = '';

  constructor() { }

  ngOnInit() {
    this.nomePagina = 'Minhas Agendas';
  }

  public alertButtons = [
    {
      text: 'Não',
      role: 'cancel',
      handler: () => {
        this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => {
        this.handlerMessage = 'Alert confirmed';
      },
    },
  ];

  setResult(ev: any) {
    this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
  }

}
