import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroIngresosPageRoutingModule } from './registro-ingresos-routing.module';

import { RegistroIngresosPage } from './registro-ingresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroIngresosPageRoutingModule
  ],
  declarations: [RegistroIngresosPage]
})
export class RegistroIngresosPageModule {}
