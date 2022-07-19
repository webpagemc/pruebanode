const mongoose = require("mongoose")

const dbConnect = ()=>{

    const URI = process.env.URI;
    mongoose.connect(
        URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err,res)=>{
            if (!err){
                console.log("CONEXION EXITOSA")
            }else{
                console.log("ERROR DE CONEXION")
            }
        }
    )
}

module.exports = dbConnect;