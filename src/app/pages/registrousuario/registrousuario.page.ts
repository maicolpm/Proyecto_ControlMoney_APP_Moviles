import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.page.html',
  styleUrls: ['./registrousuario.page.scss'],
})
export class RegistrousuarioPage implements OnInit {
  nombre: string='';
  apellidos: string='';
  edad: string='';
  telefono: string='';
  username: string='';
  password: string='';

  constructor(
    private router: Router, 
    private databaseService: DatabaseService,
    private storage: Storage) { }

  registrarse() {
    
    this.storage.set('name', this.nombre);
    this.storage.set('lastName', this.apellidos);
    this.storage.set('age', this.edad);
    this.storage.set('telephone', this.telefono);
    this.storage.set('username', this.username);
    this.storage.set('password', this.password);
// Redirigir al usuario a la página de inicio de sesión
  this.router.navigate(['/login']);
 }

  ngOnInit() {
  }

}
