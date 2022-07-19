const {check} = require("express-validator")
const {validateResults} = require("../utils/validatorConfig")
//requerimos la funcion que validara los datos desde utils.

//Creamos un array que tendra todas las validaciones del modelo
const validatorCreateItem = [

    check("name") //creamos un check por cada propiedad del modelo
    .exists() //Validamos que exista
    .notEmpty() //Validamos que no este vacio
    .isLength({min:4, max:30}) //validamos que tenga una determinada cantidad de caracteres
    ,
    check("data")
    .exists()
    .notEmpty()
    .isLength({min:10, max:100})
    ,
    /*Una vez que tengamos todas las propiedades con sus respectivas validaciones
    Ejecutaremos una funcion que sera la encargada de "activarlas"*/

    //Dicha funcion es la que creamos en utils.
    (req,res,next)=>{
       return validateResults(req,res,next)
    }
];

const validatorGetItem =[
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next)=>{
        return validateResults(req,res,next)
    }
] // solo validara el ID

module.exports = {validatorCreateItem ,validatorGetItem};
//finalmente lo exportamos//
