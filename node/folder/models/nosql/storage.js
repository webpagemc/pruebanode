const mongoose = require("mongoose");// se requiere mongoose

const storageSchema = new mongoose.Schema( // creamos un nuevo esquema de moongose
    {
        url:{
            type:String
        },
        filename:{
            type:String
        }
    }
    ,
    {
        timestamps:true, // timestamp nos guarda el dia y hora en el que un objeto fue agregado
        versionKey:false // versionKey sirve para guardar la version de un objeto cada vez que se actualiza
    }
);

module.exports = mongoose.model("storage",storageSchema);
// exportamos un modelo moongose.

//El primer parametro es el nombre del modelo("dibujos"), y el segundo es la variable que lo representa (dibujosSchema)