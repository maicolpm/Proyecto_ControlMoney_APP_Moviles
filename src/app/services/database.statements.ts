/*export const createSchema: string = `
CREATE TABLE IF NOT EXISTS ordenesdeservicio (
    ordendeservicioid TEXT primary key NOT NULL, 
    clienteid TEXT NOT NULL,
    vehiculo TEXT NOT NULL,
    fechahoraentrada DATETIME NOT NULL,
    fechahoratermino DATETIME, 
    fechahoraentrega DATETIME
);

CREATE INDEX IF NOT EXISTS ordenesdeservicio_index_ordendeservicioid ON ordenesdeservicio (ordendeservicioid);
PRAGMA user_version = 1;
`;*/
export const createSchema: string = `
CREATE TABLE IF NOT EXISTS ordenesdeservicio (
    ordendeservicioid TEXT primary key NOT NULL, 
    clienteid TEXT NOT NULL,
    vehiculo TEXT NOT NULL,
    fechahoraentrada DATETIME NOT NULL,
    fechahoratermino DATETIME, 
    fechahoraentrega DATETIME
);

CREATE INDEX IF NOT EXISTS ordenesdeservicio_index_ordendeservicioid ON ordenesdeservicio (ordendeservicioid);

CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    nombreusuario TEXT NOT NULL,
    password TEXT NOT NULL
);

PRAGMA user_version = 1;`;
