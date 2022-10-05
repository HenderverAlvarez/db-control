const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"gestion_acceso"

    /*
    
    */ 
})

connection.connect(function (err){
    if(err){
        console.log(err)
    }else{
        console.log("DB is conected")
    }
})
module.exports = connection