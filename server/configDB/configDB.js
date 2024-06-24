const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    user: "sql10715864",
    password: "d6JHZia73M",
    database: "sql10715864",
    port: 3306,
})

connection.connect((error) => {
    if(!error){
        console.log("Conectado a la base de datos")
    }else{
        console.log("Error al conectar a la base de datos")
    }
})

module.exports = connection;