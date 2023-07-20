import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { PiezasService } from 'src/app/services/piezas.service';
import { ToastService } from 'src/app/services/toast.service';
import { Pieza } from 'src/app/models/pieza.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piezas-listado',
  templateUrl: './piezas-listado.page.html',
  styleUrls: ['./piezas-listado.page.scss'],
})
export class PiezasListadoPage implements OnInit {
  public piezas!:any;
  @ViewChild('slidingList') slidingList!: IonList;

  constructor(
    private piezasService:PiezasService,
    private toastService: ToastService,
    private router: Router
  ) { }

  idAsString(id: Guid):string{
    const convertedId = JSON.parse(JSON.stringify(id));
    return convertedId.value;
  }

  ngOnInit():void {
    this.piezasService.getAll().then(piezas => {
      this.piezas = piezas;
    })
  }
  logout() {
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']); // Cambia '/login' a la ruta de la página de inicio de sesión
    
  }

  async removerPieza(pieza: Pieza){
    await this.piezasService.removeById(this.idAsString(pieza.id));
    this.piezas = await this.piezasService.getAll();
    this.toastService.presentToast('Pieza removida', 3000, 'top');
    await this.slidingList.closeSlidingItems();
  };

  ionViewWillEnter(){
    this.piezasService.getAll().then(piezas =>{
      this.piezas = piezas;
    });
  }
}
