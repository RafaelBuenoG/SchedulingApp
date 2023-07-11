import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarListPage } from './agendar-list.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarListPageRoutingModule {}
