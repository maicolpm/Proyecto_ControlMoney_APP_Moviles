import { Injectable } from "@angular/core";
import { Pieza } from "../models/pieza.model";
import { Guid } from "guid-typescript";
import {Storage} from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})

export class PiezasService {
    constructor(
        private storage: Storage
    ){}

    async update(pieza: Pieza){
        pieza.id = Guid.parse(JSON.parse(JSON.stringify(pieza.id)).value);
        if(pieza.id.isEmpty()){
            pieza.id = Guid.create();
        }
        this.storage.set(pieza.id.toString(), JSON.stringify(pieza));
    }

    async getAll(){
        let piezas: Pieza[] = [];
        try {
            await this.storage.forEach((value: string, key: string) => {
                const pieza: Pieza = JSON.parse(value);
                piezas.push(pieza);
            });
            return piezas;
        } catch (error){
            return error;
        }
    }

    async getById(id: string): Promise<Pieza>{
        const piezaString = await this.storage.get(id);
        return JSON.parse(piezaString);
    }

    async removeById(id: string){
        await this.storage.remove(id);
    }
}