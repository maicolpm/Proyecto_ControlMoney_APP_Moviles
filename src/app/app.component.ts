import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private initPlugin!: boolean;

  constructor(
    private storage:Storage,
    private platform:Platform,
    private databaseService: DatabaseService,
  ) {
    this.initializeApp();
  }

  async ngOnInit(){
    await this.storage.create();
  }

  async initializeApp(){
    this.platform.ready().then(async () => {
      this.databaseService.initilizePlugin().then(async (ret) => {
        try {
          const db = await this.databaseService.createConnection("oficina", false, "no-encryption", 1);
          this.initPlugin = ret;
        } catch (err){
          console.log(`Error: ${err}}`);
          this.initPlugin = false;
        }
        console.log("Estado de inicialización de plugin: "+ this.initPlugin);
      })
    });
  }
}
