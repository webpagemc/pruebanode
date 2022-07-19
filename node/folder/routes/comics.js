const express = require("express");// requerimos express
const { getItems, getItem, updateItem, createItem, deleteItem } = require("../controllers/comics");
const { authMiddleware } = require("../middlewares/session");
const { checkRol } = require("../middlewares/roles");
//requerimos todas las funciones del controlador

const router = express.Router(); //llamamos a la funcion router de express

router.get("/",authMiddleware,checkRol(["admin"]),getItems)

//la funcion de checkRol debe ir siempre despues del middleware de autentificacion

router.get("/",getItem)
//creamos una ruta que haga una peticion get y que llama a la funcion getItem del controlador
router.post("/",createItem)
//creamos una ruta que haga una peticion post y que llama a la funcion createItem del controlador
router.put("/",updateItem)
//creamos una ruta que haga una peticion put y que llama a la funcion updateItem del controlador
router.delete("/",deleteItem)
//creamos una ruta que haga una peticion delete y que llama a la funcion deleteItem del controlador

module.exports = router; //exportamos router.