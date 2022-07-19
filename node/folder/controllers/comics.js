const { matchedData } = require("express-validator");
const {comicsModels} = require("../models"); 
//importamos el modelo que utilizaremos para este controlador y su respectiva ruta.

//Y posteriormente tendremos una funcion por cada tipo de peticion que queramos hacer.

const getItems = async(req,res)=>{

    const user = req.user.name;
    //user va a ser igual a la propiedad name,de la propiedad user
    //del objeto req(peticion)
    const data = await comicsModels.find({});

    res.send({user,data});
    //y se mostrara al retornar los datos
    

};//obtiene todos los elementos de la tabla

const getItem = (req,res)=>{

};//obtiene un elemento de la tabla

const createItem = async(req,res)=>{

    const body = matchedData(req)
    const data = await comicsModels.create(body)
    res.send({data})

};//crea un elemento en la tabla

const updateItem = (req,res)=>{

};//actualiza un elemento de la tabla

const deleteItem = (req,res)=>{

};//elimina un elemento de la tabla

module.exports = {getItems,getItem,createItem,updateItem,deleteItem}
//finalmente, exportamos todas las funciones.