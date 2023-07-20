import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaIngresosPageRoutingModule } from './lista-ingresos-routing.module';

import { ListaIngresosPage } from './lista-ingresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaIngresosPageRoutingModule
  ],
  declarations: [ListaIngresosPage]
})
export class ListaIngresosPageModule {}
