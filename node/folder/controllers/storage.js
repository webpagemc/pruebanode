const {storageModels} = require("../models"); 
const {errorHttp} = require("../utils/errorConfig")
const fs = require("fs")
const {matchedData} = require("express-validator")

const DOMINIO = process.env.DOMINIO;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async(req,res)=>{

   const data = await storageModels.find({});
   res.send({data});

};
const getItem = async(req,res)=>{

   try {
   req = matchedData(req)
   const id = req.id
   const data = await dibujosModels.findById(id);
   res.send({data});
      
   } catch (error) {

      errorHttp(res,"Surgio un Error",403)
      
   }

};
const createItem = async(req,res)=>{

   const file = req.file //se require el archivo

   const fileData = {
   //fileData se va a referir a los datos del archivo(los mismos del modelo)

      filename: file.filename, //fileName = nombre del archivo
      url:`${DOMINIO}/${file.filename}`

   } 

   const data = await storageModels.create(fileData)
   //data es igual a la creacion de un objeto basado en el modelo storage, con los datos de fileData

   res.send({data})
   //finalmente nos responde con el elemento ya creado (data)


};
const updateItem =async (req,res)=>{

   try {
      
      const {id, ...body} = matchedData(req)

      const data = await dibujosModels.findOneAndUpdate(id,body);
      
      res.send({data});
         
      } catch (error) {
   
         errorHttp(res,"Surgio un Error",403)
         
      }

};
const deleteItem = async (req,res)=>{

   try {
      const {id} = matchedData(req)
      const dataFile = await storageModels.findById(id); 
      await storageModels.deleteOne({_id:id})
      const {filename} = dataFile;
      const filePath = `${MEDIA_PATH}/${filename}`

      fs.unlinkSync(filePath);
      const data = {filePath,status:"eliminado"}

      res.send({data});
   } catch (error) {

      errorHttp(res,"Surgio un Error",404)
      console.log(error)
      
   }

};

module.exports = {getItems,getItem,createItem,updateItem,deleteItem};
