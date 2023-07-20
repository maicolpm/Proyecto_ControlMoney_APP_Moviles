import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalGastosPage } from './total-gastos.page';

const routes: Routes = [
  {
    path: '',
    component: TotalGastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalGastosPageRoutingModule {}
