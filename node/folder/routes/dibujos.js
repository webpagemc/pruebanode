const express = require("express");
const { getItems, getItem, updateItem, createItem, deleteItem } = require("../controllers/dibujo");

const {validatorCreateItem,validatorGetItem} = require("../validators/dibujos")
//requerimos el validator

const router = express.Router(); 

router.get("/",getItems)

router.get("/:id",validatorGetItem,getItem)

router.post("/",validatorCreateItem,createItem)

router.put("/:id",validatorGetItem,validatorCreateItem,updateItem)

router.delete("/:id",validatorGetItem,deleteItem)

module.exports = router; 
