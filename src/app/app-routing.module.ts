import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tipo-servicios-listado',
    loadChildren: () => import('./pages/tipo-servicios/tipo-servicios-listado/tipo-servicios-listado.module').then(m => m.TipoServiciosListadoPageModule)
  },
  {
    path: 'tipo-servicios-add-edit/:id',
    loadChildren: () => import('./pages/tipo-servicios/tipo-servicios-add-edit/tipo-servicios-add-edit.module').then(m => m.TipoServiciosAddEditPageModule)
  },
  {
    path: 'piezas-add-edit/:id',
    loadChildren: () => import('./pages/piezas/piezas-add-edit/piezas-add-edit.module').then( m => m.PiezasAddEditPageModule)
  },
  {
    path: 'piezas-listado',
    loadChildren: () => import('./pages/piezas/piezas-listado/piezas-listado.module').then( m => m.PiezasListadoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrousuario',
    loadChildren: () => import('./pages/registrousuario/registrousuario.module').then( m => m.RegistrousuarioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'registro-gastos',
    loadChildren: () => import('./pages/registro-gastos/registro-gastos.module').then( m => m.RegistroGastosPageModule)
  },
  {
    path: 'lista-gastos',
    loadChildren: () => import('./pages/lista-gastos/lista-gastos.module').then( m => m.ListaGastosPageModule)
  },
  {
    path: 'total-gastos',
    loadChildren: () => import('./pages/total-gastos/total-gastos.module').then( m => m.TotalGastosPageModule)
  },
  {
    path: 'registro-ingresos',
    loadChildren: () => import('./pages/registro-ingresos/registro-ingresos.module').then( m => m.RegistroIngresosPageModule)
  },
  {
    path: 'lista-ingresos',
    loadChildren: () => import('./pages/lista-ingresos/lista-ingresos.module').then( m => m.ListaIngresosPageModule)
  },
  {
    path: 'total-ingresos',
    loadChildren: () => import('./pages/total-ingresos/total-ingresos.module').then( m => m.TotalIngresosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
