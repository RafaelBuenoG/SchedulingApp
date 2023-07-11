import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarFormPage } from './agendar-form.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarFormPageRoutingModule {}
