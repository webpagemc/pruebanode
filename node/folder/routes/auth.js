const express = require ("express");
const { matchedData } = require("express-validator");
const {validatorRegisterUser, validatorLoginUser } = require("../validators/auth");
const router = express.Router();
const {encriptar, comparar} = require("../utils/passwordConfig")
const {authModels} = require("../models");
const { tokenSing } = require("../utils/jwtConfig");
const {errorHttp} = require("../utils/errorConfig")

router.post("/register",validatorRegisterUser,async(req, res)=>{

    req = matchedData(req);
    const password = await encriptar(req.password)
    const body = {...req, password}

    const dataUser= await authModels.create(body);
    dataUser.set("password",undefined, {strict:false});

    const data = {
        JWT: await tokenSing(dataUser),
        user: dataUser
    }
    
    res.send({data})
})

router.post("/login", validatorLoginUser, async(req,res)=>{
try {
    req = matchedData(req);//filtramos la peticion 
    const user = await authModels.findOne({email:req.email}).select("password name email role");
    //Se busca en los modelos un elemento cuya propiedad email coincida con lo que estamos buscando
    //Y que posteriormente seleccione y se muestre las propiedades "password _id email"

    if(!user){errorHttp(res,"El usuario no existe", 404)}
    //si el usuario no existe se ejecuta errorHttp( )
    
    const hashPassword = user.get("password"); 
    //hashpassword es igual a la obtencion de la propiedad password desde user.
    const check = await comparar(req.password,hashPassword)
    //check es igual a la comparacion de req.password(la contraseña de la peticion)
    //y hashPassword (la contraseña que se cargo en la base de datos desde /register)

    if(!check){errorHttp(res,"Contraseña Incorrecta", 401);}
    //Si las contraseñas no coinciden se ejecuta ErrorHttp

    user.set("password",undefined,{strict:false})//La propiedad password se mostrara undefined

    const data = {
        token: await tokenSing(user), user //tenemos el objeto data
    }
    res.send({data})//enviamos el objeto data como respuesta
} catch (error) {
    errorHttp(res,"El usuario no existe", 404)
}
})

module.exports = router;