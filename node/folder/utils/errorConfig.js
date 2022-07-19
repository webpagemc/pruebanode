
const errorHttp = (res, message,code) =>{
   
    res.status(code)
    //responde un estado con el codigo de error (ej: 403) 
    res.send({error: message})
    //nos envia un mensaje (ej: "Surgio un error")
}
module.exports = {errorHttp};
//exportamos la funcion

/* hay 3 parametros:
--res: Lo que responde la aplicacion
--message: Un mensaje
--code: Un codigo de error
*/
