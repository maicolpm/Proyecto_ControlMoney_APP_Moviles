import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalGastosPageRoutingModule } from './total-gastos-routing.module';

import { TotalGastosPage } from './total-gastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalGastosPageRoutingModule
  ],
  declarations: [TotalGastosPage]
})
export class TotalGastosPageModule {}
