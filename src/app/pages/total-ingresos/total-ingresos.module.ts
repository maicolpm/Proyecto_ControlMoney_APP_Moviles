import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalIngresosPageRoutingModule } from './total-ingresos-routing.module';

import { TotalIngresosPage } from './total-ingresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalIngresosPageRoutingModule
  ],
  declarations: [TotalIngresosPage]
})
export class TotalIngresosPageModule {}
