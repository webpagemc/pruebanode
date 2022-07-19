const {sequelize} = require("../../../configSQL")
const {DataTypes} = require ("sequelize")

const User = sequelize.define(
    "users",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        role:{
            type:DataTypes.ENUM(["user","admin"])
        },
    },
    {
        timestamps:true
        
    }
)

module.exports = {User}