const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
//Requerimos mongoose-delete
const dibujosSchema = new mongoose.Schema(
    {
        name:{type:String},
        data:{type:String}
    }
    ,
    {
        timestamps:true, 
        versionKey:false
    }
);
dibujosSchema.plugin(mongooseDelete,{overrideMethods: "all"});
//aplicamos el plugin al esquema, y en overrideMethods: "all" le decimos que
//soobrescriba todos los metodos de moongose ya existentes.

module.exports = mongoose.model("dibujos",dibujosSchema);


