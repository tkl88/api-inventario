import mysql from "mysql";

// Crear la conexión a la base de datos
export const db = mysql.createConnection({
    host: process.env.HOSTDB,
    port: process.env.PORTDB,
    user: process.env.USER, 
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

console.log(  "host:", process.env.HOSTDB,
    "port:", process.env.PORTDB,
    "user: ",  process.env.USER, 
    "password:", process.env.PASSWORD,
    "database:", process.env.DATABASE)

// Escuchar el evento de error
db.connect(function(err) {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.stack);
        return;
    }

    console.log('Conexión establecida con el identificador', db.threadId);
});

// Manejar el evento de error
db.on('error', function(err) {
    console.error('Error en la conexión a la base de datos:', err);
});
