import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalIngresosPage } from './total-ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: TotalIngresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalIngresosPageRoutingModule {}
