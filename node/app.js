require("dotenv").config();// Sirve para usar el archivo .env y sus variables.
const express = require("express");// Es el framework que nos va a permitir usar todas las funciones para NODE
const cors = require("cors");// 
//const dbConnect = require("./config"); //requiere la funcion que nos va a conectar a la Base de Datos.
const app = express(); //toda nuestra aplicacion sera una aplicacion express.
const dbConnect = require("./config")

const port = process.env.PORT //Llamamos la variable de .env que hace referencia al numero de puerto.
app.use(cors())//Sirve para implementar CORS

app.use(express.json())//Sirve para que express pueda aceptar archivos en formato JSON.

app.use(express.static("folder/storage"))//Sirve para que express pueda aceptar archivos estaticos(jpg,png,mp3, etc.)

app.use("/",require("./folder/routes/"))//Sirve para llamar a las rutas.

app.listen(port);//Se le dice a la aplicacion (express) que escuche cuando se active el puerto que nosotros le digamos.

dbConnect();//Conecta nuestra aplicacion Express a la base de datos.


