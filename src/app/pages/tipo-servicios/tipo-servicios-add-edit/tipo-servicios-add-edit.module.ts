import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoServiciosAddEditPageRoutingModule } from './tipo-servicios-add-edit-routing.module';

import { TipoServiciosAddEditPage } from './tipo-servicios-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TipoServiciosAddEditPageRoutingModule
  ],
  declarations: [TipoServiciosAddEditPage]
})
export class TipoServiciosAddEditPageModule { }
