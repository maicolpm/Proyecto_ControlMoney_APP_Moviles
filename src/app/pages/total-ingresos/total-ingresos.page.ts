import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-total-ingresos',
  templateUrl: './total-ingresos.page.html',
  styleUrls: ['./total-ingresos.page.scss'],
})
export class TotalIngresosPage implements OnInit {
  totalIngresosCategoria: { categoria: string; total: number }[] = [];
  constructor(private storage: Storage) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    await this.storage.create();
    const ingresos = await this.storage.get('ingresos') || [];

    const categorias = new Set<string>();
    ingresos.forEach((ingreso: any) => {
      categorias.add(ingreso.categoria);
    });

    categorias.forEach((categoria: string) => {
      const totalCategoria = ingresos
        .filter((ingreso: any) => ingreso.categoria === categoria)
        .reduce((total: number, ingreso: any) => total + ingreso.monto, 0);
      this.totalIngresosCategoria.push({ categoria, total: totalCategoria });
    });
  }

}
