import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  nomePagina = ''

  constructor() { }

  ngOnInit() {
    this.nomePagina = 'Agendar';
  }

  public estabelecimentos = [
    {name: 'cocoadfafsfdfsafd', description: 'cocooooo', service: 'aaa'},
  ]
}
