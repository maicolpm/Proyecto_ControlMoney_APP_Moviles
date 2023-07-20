import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiezasListadoPageRoutingModule } from './piezas-listado-routing.module';

import { PiezasListadoPage } from './piezas-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiezasListadoPageRoutingModule
  ],
  declarations: [PiezasListadoPage]
})
export class PiezasListadoPageModule {}
