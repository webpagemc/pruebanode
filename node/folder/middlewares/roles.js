const {errorHttp} = require("../utils/errorConfig")
//importamos httpError

const checkRol = (arrayRole) => (req,res,next)=>{//funcion que checkea el rol del usuario
try {
    const user = req.user;
    //user es iguala a la propiedad user de la peticion(req)

    const userRole = user.role;
    //userRole es igual a la propiedad role de user.
    
    const checkValueRol = arrayRole.some((rolSingle)=>
    //el metodo some busca "algo" en el array arrayRole
        userRole.includes(rolSingle)
        //el metodo includes busca un elemento igual a rolSingle dentro de userRole.
        ); 

    if (!checkValueRol){ console.log(checkValueRol); errorHttp(res,"Rol de Usuario no encontrado",403)}
    //Si checkValueRol es "false" (osea que no encontro ningun elemento igual a roleSingle) nos devuelve 
    //un error.


    next()//En caso de que checkValueError sea "true" la ruta continua normalmente
    
} catch (error) {
    errorHttp(res,"Error de Permisos de Usuario",403)
    console.log(error)}
}
module.exports = {checkRol}//Se exporta la funcion checkRol