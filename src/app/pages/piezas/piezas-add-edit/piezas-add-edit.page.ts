import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pieza } from 'src/app/models/pieza.model';
import { ToastService } from 'src/app/services/toast.service';
import { Guid } from 'guid-typescript';
import { PiezasService } from 'src/app/services/piezas.service';


@Component({
  selector: 'app-piezas-add-edit',
  templateUrl: './piezas-add-edit.page.html',
  styleUrls: ['./piezas-add-edit.page.scss'],
})
export class PiezasAddEditPage implements OnInit {
  private pieza!: Pieza;
  public modoDeEdicion = false;
  public piezasForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private piezasService: PiezasService,
    private router: Router,
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && Guid.isGuid(id)){
      this.pieza = await this.piezasService.getById(id);
    } else{
      this.pieza = {id: Guid.createEmpty(), nombre: '', valor: 0.00};
      this.modoDeEdicion = true;
    }
    this.piezasForm = this.formBuilder.group({
        id: [this.pieza.id],
        nombre: [this.pieza.nombre, Validators.required],
        valor: [this.pieza.valor, Validators.required],
      });
  }

  iniciarEdicion(){
    this.modoDeEdicion = true;
  }

  cancelarEdicion(){
    this.piezasForm.setValue(this.pieza);
    this.modoDeEdicion = false;
  }

  async submit(){
    console.log(this.piezasForm.value);
    await this.piezasService.update(this.piezasForm.value);
    this.pieza = this.piezasForm.value;

    this.toastService.presentToast('Guardado exitoso',3000, 'top');
    this.modoDeEdicion = false;

    this.router.navigateByUrl('');
  }
}
