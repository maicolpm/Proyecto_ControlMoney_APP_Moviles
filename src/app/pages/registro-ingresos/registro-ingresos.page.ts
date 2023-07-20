import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro-ingresos',
  templateUrl: './registro-ingresos.page.html',
  styleUrls: ['./registro-ingresos.page.scss'],
})
export class RegistroIngresosPage implements OnInit {
  monto: number = 0;
  categoria: string='';
  detalles: string='';
  constructor(private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }
  async guardarIngreso() {
    const ingreso = {
      monto: this.monto,
      categoria: this.categoria,
      detalles: this.detalles
    };

    await this.storage.create();
    const ingresos = await this.storage.get('ingresos') || [];
    ingresos.push(ingreso);
    await this.storage.set('ingresos', ingresos);

    this.navCtrl.navigateForward('/lista-ingresos');
  }

}
