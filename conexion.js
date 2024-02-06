import mysql from "mysql"


export const db = mysql.createConnection({
    host: process.env.HOSTDB,
    port: process.env.PORTDB,
    user: process.env.USER, 
    password:  process.env.PASSWORD,
    database: process.env.DATABASE
})


if(db){
    console.log("Conexion creada")
}else{
    console.log("Sin conectar")
}
