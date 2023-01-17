const express = require("express")
const app =express();
const morgan = require("morgan");
var cors = require('cors');

const corsOptions ={
    //origin:'http://localhost:3000',
    //origin: ['https://controldb.onrender.com','controldb.onrender.com'], // cambiar
    origin:"*",
    methods: ['OPTIONS, GET, POST, PUT, DELETE'],
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
// Configurar cabeceras y cors
/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'OPTIONS,POST,GET, PUT, DELETE');
    res.header('Allow', 'OPTIONS,POST,GET,PUT, DELETE');
    next();
});*/

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