import { Injectable } from "@angular/core";
import { SQLiteConnection, CapacitorSQLite, SQLiteDBConnection  } from "@capacitor-community/sqlite";
import { Capacitor } from "@capacitor/core";
import { createSchema } from './database.statements';
import { Guid } from "guid-typescript";


Injectable({
    providedIn: 'root'
})

export class DatabaseService {
    sqliteConnection!: SQLiteConnection;
    platform!: string;
    native: boolean = false;
    sqlitePlugin: any;

    async initilizePlugin(): Promise<boolean> {
        return new Promise(resolve => {
            this.platform = Capacitor.getPlatform();
            if (this.platform === 'ios' || this.platform == 'android')
                this.native = true;
            this.sqlitePlugin = CapacitorSQLite;
            this.sqliteConnection = new SQLiteConnection(this.sqlitePlugin);
            resolve(true);
        });
    }

    async createConnection(database: string, encrypted: boolean,
        mode: string, version: number
    ): Promise<SQLiteDBConnection> {
        if (this.sqliteConnection != null) {
            try {
                const db: SQLiteDBConnection = await this.sqliteConnection.createConnection(database, encrypted, mode, version, false);
                if (db != null) {
                    await this.createSchema(db);
                    return Promise.resolve(db);
                } else {
                    return Promise.reject(new Error(`Error al crear conexión`));
                }
            } catch (err) {
                return Promise.reject(new Error(String(err)));
            }
        } else {
            return Promise.reject(new Error(`Ninguna conexión disponible para  ${database}`));
        }
    }

    private async createSchema(db: SQLiteDBConnection): Promise<void> {
        await db.open();

        let createSchemma: any = await db.execute(createSchema);
        await this.populateDatabase(db);

        await db.close();

        if(createSchemma.changes.chanbes < 0){
            return Promise.reject(new Error("Error en la creación de tablas"));
        }
        return Promise.resolve();
    }

    private async populateDatabase(db: SQLiteDBConnection): Promise<void>{
        let returnQuery = await db.query("select COUNT(ordendeservicio) as qtdeOS from ordenesdeservicio");
        if (returnQuery.values![0].qtdeOS === 0){
            let sqlcmd: string =
                "INSERT INTO ordenesdeservicio (ordendeservicio, clienteid, vehiculo, fechahoraentrada, fechahoratermino) VALUES (?,?,?,?,?)";
            let values: Array<any> = [Guid.create().toString(), Guid.create().toString(), 'ABC-1235', Date.now(), null];
            let returnInsert = await db.run(sqlcmd, values);
            if (returnInsert.changes) {
                return Promise.reject(new Error("Error en la inserción de orden de servicio"));
            }
        }
        return Promise.resolve();
    }

    async insertUser(nombre: string, apellido: string, nombreusuario: string, password: string): Promise<void> {
        const db: SQLiteDBConnection = await this.createConnection("myDatabase", false, "no-encryption", 1);
        await db.open();
    
        const sql = "INSERT INTO usuarios (nombre, apellido, nombreusuario, password) VALUES (?, ?, ?, ?)";
        const values: any[] = [nombre, apellido, nombreusuario, password];
    
        try {
          await db.run(sql, values);
        } catch (error) {
          throw new Error("Error al insertar usuario en la base de datos");
        }
    
        await db.close();
      }

      async authenticateUser(usuario: string, password: string): Promise<boolean> {
        const db = await this.createConnection('myDatabase', false, 'no-encryption', 1);
      
        try {
          const query = 'SELECT * FROM usuarios WHERE nombreusuario  = ? AND password = ?';
          const values = [usuario, password];
          const result = await db.query(query, values);
      
          if (result && result.values && result.values.length > 0) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.error('Error en la autenticación de usuario:', error);
          return false;
        } finally {
          await db.close();
        }
      }

}
