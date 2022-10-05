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

module.exports = router; 