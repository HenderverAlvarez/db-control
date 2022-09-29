const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user: "id19628430_gestionador_enc",
    password: "I>-~rNW/8MHfgz2I",
    database:"id19628430_gestion_acceso"
})

connection.connect(function (err){
    if(err){
        console.log(err)
    }else{
        console.log("DB is conected")
    }
})
module.exports = connection