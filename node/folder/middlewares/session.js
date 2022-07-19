const { authModels } = require("../models")
const {errorHttp} = require("../utils/errorConfig")//requerimos errorHttp
const {verifyToken} = require("../utils/jwtConfig")//requrimos la funcion verifyToken

const authMiddleware = async(req,res,next)=>{
//Creamos la funcion authMiddleware
    try {
        const headerAUTH = req.headers.authorization
        //headerAUTH es igual a la proiedad authorization,de la propiedad headers, del objeto req(de la peticion)
        if(!headerAUTH){errorHttp(res,"Error de Sesion",401)};
        //Si headerAUTH no coincide habra un error de sesion

        const token = headerAUTH.split(" ").pop();//Este metodo nos permitira obtener solo el token

        const dataToken = await verifyToken(token);
        //dataToken es igual a la verificacion y validez del token desde la funcion verifyToken

        if(!dataToken._id){errorHttp(res,"La sesion no existe",401)}
        //Si la propiedad _id del payload de la verificacion del token no coincide con headerAUTH nos
        //mostrara un error

        const user = await authModels.findById(dataToken._id);
        //user va a ser igual a la busqueda del usuario cuyos datos coincidan con el ID de
        //dataToken
        req.user = user
        //Posteriormente se inyecta en la peticion(req) una nueva propiedad llamada user
        //cuyo valor va a ser user.

        next()
        //Si todo procede sin errores el middleware continuara a la ruta normalmente
    } catch (error) {
        errorHttp(res,"Error de Sesion",401)
    }
}

module.exports = {authMiddleware}