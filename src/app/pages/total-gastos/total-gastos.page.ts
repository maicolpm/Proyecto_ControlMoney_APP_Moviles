import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-total-gastos',
  templateUrl: './total-gastos.page.html',
  styleUrls: ['./total-gastos.page.scss'],
})
export class TotalGastosPage implements OnInit {
  totalDia: number = 0;
  totalSemana: number = 0;
  totalMes: number = 0;
  totalGastos: number = 0;

  constructor(private storage: Storage) {}

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
