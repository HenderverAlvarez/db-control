const express = require("express")
const app =express();
const morgan = require("morgan");
var cors = require('cors');
const corsOptions ={
    origin:'http://localhost:8100',
}

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