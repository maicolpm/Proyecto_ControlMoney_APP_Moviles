import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroIngresosPage } from './registro-ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroIngresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroIngresosPageRoutingModule {}
