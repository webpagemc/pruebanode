const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
//Requerimos mongoose-delete
const authSchema = new mongoose.Schema(
    {
        name:{type:String},
        password:{type:String,select:false},
        email:{type:String},
        role:{
            type:["user","admin"],
            default:"user"
        }
    }
    ,
    {
        timestamps:true, 
        versionKey:false
    }
);
authSchema.plugin(mongooseDelete,{overrideMethods: "all"});
module.exports = mongoose.model("auth",authSchema);

