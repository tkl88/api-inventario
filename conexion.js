import mysql from "mysql"


export const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.ROOT, 
    password:  process.env.PASSWORD,
    database: process.env.DATABASE

 
})

if(db){
    console.log("Conexion creada")
}else{
    console.log("Sin conectar")
}