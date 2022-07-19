const bcryptjs = require("bcryptjs");

const encriptar = async (password) =>{

    const hash = await bcryptjs.hash(password,10);
    
    return hash
};
const comparar = async (password,hashPassword) =>{
    
    return await bcryptjs.compare(password,hashPassword)

};
module.exports = {encriptar, comparar};