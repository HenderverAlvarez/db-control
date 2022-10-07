const {Router} = require("express");
const router = Router();
const mysql = require("../database.js")

router.get("/", (req,res)=>{
    res.json({tittle:"hello world"})
})

router.post("/getAllusers", (req,res)=>{
    mysql.query("SELECT * FROM users", (err, rows, fields) =>{
     res.send(rows);
    });
}) 

router.post("/auth", (req,res)=>{
    let user = req.body.user;
    let pass = req.body.pass;
    mysql.query("SELECT * FROM users", (err, rows, fields) =>{
        if(rows.lenght > 0){
            res.send("fallo")
        }else{
            res.send(rows);
        }
    });
}) 

module.exports = router; 