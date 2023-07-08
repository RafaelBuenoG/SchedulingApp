import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhasAgendasPage } from './minhas-agendas.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasAgendasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhasAgendasPageRoutingModule {}
