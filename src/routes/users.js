const {Router} = require("express");
const router = Router();
const { Pool, Client} = require('pg')

const client = new Client({
    host:"ec2-3-223-169-166.compute-1.amazonaws.com",
    user: "uyugdqxeleynar",
    password: "d84ae2db831a6553a3d508051de8a90dd86682faec44f9f1f267557068c9faf8",
    database:"d2n7297u1nh853",
    port: "5432",
    ssl:{
        rejectUnauthorized: false,
    }
})

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

router.get("/", (req,res)=>{
    res.json({tittle:"hello world"})
})
router.post("/hello", (req,res)=>{
    res.send("hello world")
})


router.get("/getAllusers", (req,res)=>{
    client.query('SELECT * FROM users', (err, resp) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.json(resp.rows)
        }
    })
}) 

router.post("/auth", (req,res)=>{
    let user = req.body.user;
    client.query("SELECT * FROM users WHERE users.user = '"+user+"'", (err, resp) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.json(resp.rows)
        }
    })
}) 
router.post("/getByCode", (req,res)=>{
    let code = req.body.code;
    client.query("select * from invitados where invitados.codigo = '"+code+"'", (err, resp) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.json(resp.rows)
        }
    })
}) 


router.post("/auth", (req,res)=>{
    let nombre = req.body.nombre;
    let mesa = req.body.mesa;
    let familia = req.body.familia;
    let comentarios = req.body.comentarios
    let code = req.body.code

    client.query("insert into invitados('nombre', 'mesa', 'familia', 'comentarios', 'codigo') VALUES('"+nombre+"', "+mesa+", '"+familia+"', '"+comentarios+"', '"+code+"')", (err, resp) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.json(resp.rows)
        }
    })
}) 



module.exports = router; 