const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"",
    user: "",
    password: "",
    database:""
})

connection.connect(function (err){
    if(err){
        console.log(err)
    }else{
        console.log("DB is conected")
    }
})
module.exports = connection