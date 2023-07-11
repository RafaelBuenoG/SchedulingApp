import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Agendar', url: '/agendamentos', icon: 'storefront' },
    { title: 'Minhas Agendas', url: '/minhas-agendas', icon: 'calendar' },
  ];
  public configPages = [
    { title: 'Conta', url: '/conta', icon: 'person' },
    { title: 'Configurações', url: '/config', icon: 'settings' },
    { title: 'Possuí um estabelecimento?', url: '/config', icon: 'briefcase' },
  ];
  constructor() {}
}
