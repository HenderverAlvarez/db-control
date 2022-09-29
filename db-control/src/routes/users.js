const {Router} = require("express");
const router = Router();
const mysql = require("../database.js")

router.get("/", (req,res)=>{
    res.json({tittle:"hello world"})
})

router.get("/", (req,res)=>{
    query= "SELECT * FROM users"
    mysql.query(query, (err, rows, fields) =>{
        if(!err){
            res.json(row);
        }else{
            console.log(err);
        }
    });
}) 

module.exports = router; 