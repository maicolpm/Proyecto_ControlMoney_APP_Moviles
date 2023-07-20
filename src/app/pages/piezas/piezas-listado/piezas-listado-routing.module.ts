import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiezasListadoPage } from './piezas-listado.page';

const routes: Routes = [
  {
    path: '',
    component: PiezasListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiezasListadoPageRoutingModule {}
