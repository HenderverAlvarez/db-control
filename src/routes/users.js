const {Router} = require("express");
const router = Router();
const { Pool, Client} = require('pg')

const client = new Client({
    host:"ccc.Ohio-postgres.render.com",
    user: "admin",
    password: "ti0x35gkFGqtKLLjuIYWpbLNQfoXpQQd",
    database:"dbcontrol2022",
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
    client.query('SELECT * FROM user.t001_usuario', (err, resp) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.json(resp.rows)
        }
    })
}) 

router.get("/getByCode", (req,res)=>{
    let code = req.body.code;
    client.query("select * from evento.t004_invitado where codigo_qr = '"+code+"'", (err, resp) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.json(resp.rows)
        }
    })
}) 

router.get("/auditoria", (req,res)=>{
    client.query("select * from evento.t005_auditoria", (err, resp) => {
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

router.post("/api/user/login", (req,res)=>{
    let identificador = req.body.identificador;
    let contraseña = req.body.contraseña;
    client.query("with alluser as (select * from "+'"user"'+".t001_usuario tu) select CASE when alluser.identificador != '"+identificador+"' then '["+'Error'+":"+'Indicador Invalido'+", "+'cod_respuesta'+":"+'015'+"]' when pgp_sym_decrypt(alluser.contraseña ,'password') != '"+contraseña+"' then '["+'Error'+":"+'Indicador Invalido'+", "+'cod_respuesta'+":"+'015'+"]' else CONCAT_WS(' : ','¡Usuario autenticado!',alluser.identificador) end from alluser where identificador = '"+identificador+"'", (err, resp) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.json(resp.rows)
        }
    })
}) 


module.exports = router; 