import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { Storage } from '@ionic/storage';

import {  } from 'src/app/pages/login/login.page';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  showButtons: boolean = false;
  
  totalDia: number = 0;
  totalSemana: number = 0;
  totalMes: number = 0;
  totalGastos: number = 0;
  constructor(private menuController: MenuController,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private storage: Storage) { }

  

  closeMenu() {
    this.menuController.close();
  }
  CerrarSesion() {
    this.toastService.presentToast('Se Cerro la Sesion', 3000, 'top');
    this.router.navigateByUrl('/login');
  }

  toggleButtons() {
    this.showButtons = !this.showButtons;
  }
  

  ngOnInit() {
    this.calcularTotalGastos();
  }

  calcularTotalGastos() {
    this.storage.get('gastos').then((gastos: any[]) => {
      if (gastos) {
        this.totalGastos = gastos.reduce((total, gasto) => total + gasto.monto, 0);

        // Calcular el total de gastos por día
        const fechaActual = new Date().toISOString().substr(0, 10);
        this.totalDia = gastos
          .filter(gasto => gasto.fecha === fechaActual)
          .reduce((total, gasto) => total + gasto.monto, 0);

        // Calcular el total de gastos por semana
        const fechaActualObj = new Date();
        const fechaInicioSemana = new Date(
          fechaActualObj.getFullYear(),
          fechaActualObj.getMonth(),
          fechaActualObj.getDate() - fechaActualObj.getDay()
        ).toISOString().substr(0, 10);
        this.totalSemana = gastos
          .filter(gasto => gasto.fecha >= fechaInicioSemana)
          .reduce((total, gasto) => total + gasto.monto, 0);

        // Calcular el total de gastos por mes
        const fechaInicioMes = new Date(
          fechaActualObj.getFullYear(),
          fechaActualObj.getMonth(),
          1
        ).toISOString().substr(0, 10);
        this.totalMes = gastos
          .filter(gasto => gasto.fecha >= fechaInicioMes)
          .reduce((total, gasto) => total + gasto.monto, 0);
      }
    });
  }

}

