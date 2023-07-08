import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.page.html',
  styleUrls: ['./estabelecimentos.page.scss'],
})
export class EstabelecimentosPage implements OnInit {
  nomePagina = ''

  constructor() { }

  ngOnInit() {
    this.nomePagina = 'Estabelecimentos';
  }

}
