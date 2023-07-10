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
    {name: 'Salão de Beleza', address: 'Rodovia Raposo Tavares, Lageadinho, 345', city: 'Barra Bonita, SP', service: 'Cabelo', image: 'https://i0.wp.com/www.pbhoje.com.br/wp-content/uploads/2021/02/redecker_sperb_581_salao-de-beleza-ab.jpg?w=1920&quality=90&strip=all&ssl=1'},
    {name: 'Salão de Beleza', address: 'Rua Serra de Bragança, Vila Gomes Cardim, 546', city: 'Igaraçu do Tiete, SP', service: 'Cabelo', image: 'https://ionicframework.com/docs/img/demos/card-media.png'},
  ]

  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.data];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
}
