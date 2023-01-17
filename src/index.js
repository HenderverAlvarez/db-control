const express = require("express")
const app =express();
const morgan = require("morgan");
var cors = require('cors');

const corsOptions ={
    //origin:'http://localhost:3000',
    origin: ['https://controldb.onrender.com','controldb.onrender.com'], // cambiar
    methods: ['GET, POST, OPTIONS, PUT, DELETE'],
    credentials: true,
}

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', ', OPTIONS,GET, POST, PUT, DELETE');
    res.header('Allow', 'OPTIONS, GET, POST,PUT, DELETE');
    next();
});

app.use(cors());

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