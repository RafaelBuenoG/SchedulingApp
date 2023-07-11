import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarFormPageRoutingModule } from './agendar-form-routing.module';

import { AgendarFormPage } from './agendar-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarFormPageRoutingModule
  ],
  declarations: [AgendarFormPage]
})
export class AgendarFormPageModule {}
