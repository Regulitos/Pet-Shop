const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_davie",
    password: "C7#3fY?86tvZJbY",
    database: "freedb_registross",
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