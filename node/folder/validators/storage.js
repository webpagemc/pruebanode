const {check} = require("express-validator")

const {validateResults} = require("../utils/validatorConfig")
const validatorCreateItem = [

    check("url")
    .exists() 
    .notEmpty() 
    ,
    check("filename")
    .exists()
    .notEmpty()
    ,
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
] 

module.exports = {validatorCreateItem ,validatorGetItem};

