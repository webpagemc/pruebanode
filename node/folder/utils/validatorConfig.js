const {validationResult} = require("express-validator")
//requerimos validationResult de "express-validator"

/*tendremos una funcion que tendra un try/catch.
Osea ejecutara la validacion  (try), y en caso de que
no se cumpla nos devolvera un error (catch)
*/
const validateResults = (req,res,next) => {
    try {
        validationResult(req).throw();
        /*Se ejecuta la validacion y si no se cumple la interrumpe(throw)*/
        return next();
        /*En caso de que se cumpla retorna next(), osea que continue
        al controlador normalmente */
        
    } catch (err) {
        /*En caso de que alla error ejecuta lo siguiente */
        res.status(403);//nos devuelve un error 403 en la consola
        res.send({
            
            errors: err.array()
            /*y nos envia un array con los errores que surgieron durante 
            la validacion*/
        })
    }
}
module.exports = {validateResults};
//finalmente exportamos la funcion
