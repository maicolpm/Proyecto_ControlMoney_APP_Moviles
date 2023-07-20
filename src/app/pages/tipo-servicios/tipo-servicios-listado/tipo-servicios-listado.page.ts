import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { TipoServicio } from 'src/app/models/tipo-servicio.model';
import { TipoServiciosService } from 'src/app/services/tipo-servicios.services';
import { ToastService } from 'src/app/services/toast.service';



@Component({
  selector: 'app-tipo-servicios-listado',
  templateUrl: './tipo-servicios-listado.page.html',
  styleUrls: ['./tipo-servicios-listado.page.scss'],
})
export class TipoServiciosListadoPage implements OnInit {
  public tiposServicios: any;
  @ViewChild('slidingList') slidingList!: IonList;

  constructor(
    private tipoServiciosService: TipoServiciosService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.tiposServicios = this.tipoServiciosService.getAll();
  }

  async removerTipoServicio(tipoServicio: TipoServicio) {
    this.tipoServiciosService.remove(tipoServicio);
    this.toastService.presentToast('Tipo de servicio removido', 3000, 'top');
    await this.slidingList.closeSlidingItems();
  }
}
