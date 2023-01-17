const express = require("express")
const app =express();
const morgan = require("morgan");
/*var cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000',
    //origin: ['http://10.5.0.1:5000'], // cambiar
    methods: ['GET', 'POST'],
    credentials: true,
}*/

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//app.use(cors());


//settings
app.set("port", process.env.PORT || 3000);
//middleware

app.use(morgan("dev")) //middleware util
app.use(express.json()); //para recibir y enviar jsons 
app.use(express.urlencoded({extended:false}))

//ROUTES
app.use(require("./routes/users"))

//starting server
app.listen(app.get("port"), () =>{
    console.log("Server on port "+app.get("port"))
})