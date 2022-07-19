const {check} = require("express-validator")
const {validateResults} = require("../utils/validatorConfig")
const validatorRegisterUser = [

    check("name")
    .exists() 
    .notEmpty() 
    ,
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:4 , max:15})
    ,
    check("email")
    .exists()
    .notEmpty()
    .isEmail()
    ,
    (req,res,next)=>{
       return validateResults(req,res,next)
    }
];
const validatorLoginUser =[
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:4 , max:15})
    ,
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next)=>{
        return validateResults(req,res,next)
    }
] 

module.exports = {validatorRegisterUser ,validatorLoginUser};

