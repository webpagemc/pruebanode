
const {dibujosModels} = require("../models"); 
const {matchedData} = require("express-validator")
const {errorHttp} = require("../utils/errorConfig")

const getItems = async(req,res)=>{

   const data = await dibujosModels.find({});
   res.send({data});


};//obtiene todos los elementos de la tabla

const getItem = async(req,res)=>{

   try {
   req = matchedData(req)
   const id = req.id
   const data = await dibujosModels.findById(id);
   res.send({data});
      
   } catch (error) {

      errorHttp(res,"Surgio un Error",403)
      
   }

};//obtiene un elemento de la tabla

const createItem = async(req,res)=>{

   try { //tenemos el codigo normal del controlador

      const body = matchedData(req) 
      const data = await dibujosModels.create(body)
      res.send({data})
      
   } catch (error) {//Y en caso de que algo falle se ejecutara catch

      errorHttp(res,"Surgio un Error",403)
      //la funcion nos devolvera una respuesta con el codigo de error.
      //acomnpañado de un mensaje
      
   }
   


};//crea un elemento en la tabla

const updateItem =async (req,res)=>{

   try {
      
      const {id, ...body} = matchedData(req)

      const data = await dibujosModels.findOneAndUpdate(id,body);
      
      res.send({data});
         
      } catch (error) {
   
         errorHttp(res,"Surgio un Error",403)
         
      }

};//actualiza un elemento de la tabla

const deleteItem = async(req,res)=>{

   try {
      req = matchedData(req)
      const id = req.id
      const data = await dibujosModels.delete({_id:id});
      res.send({data});
         
      } catch (error) {
   
         errorHttp(res,"Surgio un Error",403)
         
      }

};//elimina un elemento de la tabla

module.exports = {getItems,getItem,createItem,updateItem,deleteItem}
//finalmente, exportamos todas las funciones.