import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaIngresosPage } from './lista-ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaIngresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaIngresosPageRoutingModule {}
