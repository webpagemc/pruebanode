const express = require("express");//requerimos express
const fs = require("fs");//requerimos fs(File System)
const router = express.Router();//llamamos a la funcion Router de express

const PATH_ROUTES = __dirname; //path_route va a ser igual a __dirname

const allRoutes = fs.readdirSync(PATH_ROUTES);
/*la funcion readdirSync nos permite leer un directorio(una carpeta) que nosotros
*determinemos, en este caso PATH_ROUTES, osea la misma carpeta en la que nos encontramos */

//readdirSync nos devolvera un array que contendra todos los elementos de la carpeta.

const removeExtension = (fileName) =>{
    return fileName.split(".").shift()
}
//creamos una funcion que nos permita remover el .js de cada elemento.

allRoutes.filter((file)=>{//utilizamos el metodo filter para quitar la extension y cargar todas las rutas.
    const name = removeExtension(file)//removera la extension .js de cada elemento

    if(name !== "index"){//se descarta el elemento index
        
        router.use(`/${name}`,require(`./${file}`))
  //ej: router.use("/dibujo"),require("./dibujo.js")
    }
})

module.exports = router;//exportamos router.




