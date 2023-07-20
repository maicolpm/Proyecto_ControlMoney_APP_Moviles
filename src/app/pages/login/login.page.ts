import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { ToastService } from 'src/app/services/toast.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';


  constructor(
    private router: Router,
    private toastController: ToastController,
    private toastService: ToastService,
    private databaseService: DatabaseService,
    private storage: Storage,
    
  ) { 
    this.username = '';
    this.password = '';
  }

  async login() {
    
    this.storage.get('username').then((storedUsername) => {
      this.storage.get('password').then((storedPassword) => {
        // Verificar si los datos de inicio de sesión son correctos
        if (this.username === storedUsername && this.password === storedPassword) {
          // Autenticación exitosa
          this.router.navigate(['/menu']);
        } else {
          // Autenticación fallida, mostrar mensaje de error
          //console.log('Error de inicio de sesión');
          this.toastService.presentToast('Credenciales inválidas',3000, 'top');
        }
      });
    });

  }
  RegistrarUsuario() {
    this.router.navigate(['/registrousuario']); 
  }

  ngOnInit() {
  }

}
