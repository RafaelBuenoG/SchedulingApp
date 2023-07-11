import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarListPageRoutingModule } from './agendar-list-routing.module';

import { AgendarListPage } from './agendar-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarListPageRoutingModule
  ],
  declarations: [AgendarListPage]
})
export class AgendarListPageModule {}
