import { Injectable } from "@angular/core";
import { TipoServicio } from "../models/tipo-servicio.model";

@Injectable({
    providedIn: 'root'
})

export class TipoServiciosService {
    private tiposServicios: TipoServicio[] = [
        { id: 1, nombre: 'Alineamiento', valor: 12.34 },
        { id: 2, nombre: 'Balanceo', valor: 56.78 },
        { id: 3, nombre: 'Revisión de frenos', valor: 90.12 },
        { id: 4, nombre: 'Suspensión', valor: 34.56 },
    ];

    private getIndexOfElement(id: number): number {
        return this.tiposServicios.indexOf(this.getById(id));
    }

    constructor() { }

    update(tipoServicio: TipoServicio) {
        if (tipoServicio.id < 0) {
            tipoServicio.id = this.tiposServicios[this.tiposServicios.length - 1].id + 1;
            this.tiposServicios.push(tipoServicio);
        }
        else {
            this.tiposServicios[this.getIndexOfElement(tipoServicio.id)] = tipoServicio;
        }
    }

    getById(id: number): TipoServicio {
        const tipoServicioSeleccionado = this.tiposServicios.filter(
            tipoServicio => tipoServicio.id === id
        );
        return tipoServicioSeleccionado[0];
    }

    getAll(): TipoServicio[] {
        return this.tiposServicios;
    }

    
  remove(tipoServico: TipoServicio) {
    this.tiposServicios.splice(this.getIndexOfElement(tipoServico.id), 1);}
}