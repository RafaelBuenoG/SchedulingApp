import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {
  nomePagina = ''

  constructor() { }

  ngOnInit() {
    this.nomePagina = 'Conta';
  }

}
