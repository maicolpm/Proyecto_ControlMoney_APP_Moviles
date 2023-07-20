import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-lista-ingresos',
  templateUrl: './lista-ingresos.page.html',
  styleUrls: ['./lista-ingresos.page.scss'],
})
export class ListaIngresosPage {
  ingresos: any[] = [];

  constructor(
    private navCtrl: NavController,
    private storage: Storage
  ) {}

  ionViewWillEnter() {
    this.obtenerIngresos();
  }

  async obtenerIngresos() {
    await this.storage.create();
    this.ingresos = await this.storage.get('ingresos') || [];
  }

  async eliminarIngreso(ingreso: any) {
    await this.storage.create();
    const index = this.ingresos.findIndex((item: any) => item.id === ingreso.id);
    if (index > -1) {
      this.ingresos.splice(index, 1);
      await this.storage.set('ingresos', this.ingresos);
    }
  }

  editarIngreso(ingreso: any) {
    // Navegar a la página de edición de ingresos y pasar los datos del ingreso seleccionado
    this.navCtrl.navigateForward('/editar-ingreso', { state: { ingreso } });
  }
}
