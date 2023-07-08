import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasAgendasPageRoutingModule } from './minhas-agendas-routing.module';

import { MinhasAgendasPage } from './minhas-agendas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasAgendasPageRoutingModule
  ],
  declarations: [MinhasAgendasPage]
})
export class MinhasAgendasPageModule {}
