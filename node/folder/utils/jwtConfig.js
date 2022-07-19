const jwt = require("jsonwebtoken");//Requerimos la dependencia jsonwebtoken (jwt)
const JWT_SECRET = process.env.JWT_SECRET;//Requerimos la variable de entorno

const tokenSing = async (user)=>{

    /* desde jwt implementaremos el metodo sign, el cual necesita 3 objetos {  } */
    const sign = await jwt.sign(

        {
            _id:user._id,
            name:user.name,
            role:user.role
        }
        ,  
        JWT_SECRET
        ,
        {
            expiresIn:"2h"
        }
    )

    return sign 
    //retonamos sign que seria el jwt ya con los datos cargados
};

const verifyToken = async (tokenJWT)=>{

    try {
        return jwt.verify(tokenJWT, JWT_SECRET) 
        //Se toma de jwt el metodo verify, el primer parametro va a ser el token del usuario
        //y el segundo va a ser la variable de entorno 
    } catch (error) {
        return null
        //Si hay error no retorna nada
    }

};

module.exports = {tokenSing,verifyToken}

