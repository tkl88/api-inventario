import mysql from "mysql"


export const db = mysql.createConnection({
    host: process.env.HOSTDB,
    user: process.env.USER, 
    password:  process.env.PASSWORD,
    database: process.env.DATABASE

 
})

db.connect(function(err){
        if(err) {
            console.error("Connection error: " + err.stack);
            return;
        }
    });

if(db){
    console.log("Conexion creada")
}else{
    console.log("Sin conectar")
}
