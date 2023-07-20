import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoServicio } from 'src/app/models/tipo-servicio.model';
import { TipoServiciosService } from 'src/app/services/tipo-servicios.services';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-tipo-servicios-add-edit',
  templateUrl: './tipo-servicios-add-edit.page.html',
  styleUrls: ['./tipo-servicios-add-edit.page.scss'],
})
export class TipoServiciosAddEditPage implements OnInit {
  private tipoServicio!: TipoServicio;
  public modoDeEdicion = false;
  public tiposServiciosForm!: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private tipoServicioService: TipoServiciosService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router) {
  }

  iniciarEdicion() {
    this.modoDeEdicion = true;
  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (id > 0) {
      this.tipoServicio = this.tipoServicioService.getById(id);
    }
    else {
      this.tipoServicio = { id, nombre: '', valor: 0.00 };
      this.modoDeEdicion = true;
    }

    this.tiposServiciosForm = this.formBuilder.group({
      id: [this.tipoServicio.id],
      nombre: [this.tipoServicio.nombre, Validators.required],
      valor: [this.tipoServicio.valor, Validators.required],
    });
  }

  cancelarEdicion() {
    this.tiposServiciosForm.setValue(this.tipoServicio);
    this.modoDeEdicion = false;
  }

  submit() {
    this.tipoServicioService.update(this.tiposServiciosForm.value);
    this.toastService.presentToast('Registro exitoso', 3000, 'top');
    this.router.navigateByUrl('');
    this.modoDeEdicion = false;
  }

}
