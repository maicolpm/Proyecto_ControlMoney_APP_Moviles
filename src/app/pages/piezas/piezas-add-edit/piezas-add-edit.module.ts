import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PiezasAddEditPageRoutingModule } from './piezas-add-edit-routing.module';

import { PiezasAddEditPage } from './piezas-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiezasAddEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PiezasAddEditPage]
})
export class PiezasAddEditPageModule {}
