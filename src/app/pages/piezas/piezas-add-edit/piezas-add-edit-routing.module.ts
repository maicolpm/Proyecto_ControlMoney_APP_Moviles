import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiezasAddEditPage } from './piezas-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PiezasAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiezasAddEditPageRoutingModule {}
