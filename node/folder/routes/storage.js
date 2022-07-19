const express = require("express");//importamos express
const {getItems,getItem,createItem,updateItem,deleteItem } = require("../controllers/storage");//importamos los controladores a utilizar
const router = express.Router();//importamos router
const {uploadMiddleware} = require("../utils/multerConfig")//importamos la funcion de multer
const {validatorCreateItem,validatorGetItem} = require("../validators/storage")


router.get("/",getItems);

router.get("/:id",validatorGetItem,getItem);

router.post("/",uploadMiddleware.single("archivo"),createItem);

router.put("/:id",validatorGetItem,validatorCreateItem,updateItem);

router.delete("/:id",validatorGetItem,deleteItem)


module.exports = router //exportamos la o las rutas

//HAY QUE HACER LOS VALIDADORES

//FIJATE EN LA PARTE QUE TE SALTEASTE DEL VIDEO DEL GORDO
