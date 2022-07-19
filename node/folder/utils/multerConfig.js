const multer = require("multer")// se llama a multer
const storage = multer.diskStorage({
/* se llama a la funcion de disco de almacenamiento(diskStorage)
 y se le asigna una variable ( storage ) */

    destination: function(req,file,cb){
        /*destination hace referencia al lugar en donde se
        almacenaran los archivos*/

        const pathStorage = `${__dirname}/../storage`;
        /*pathStorage es una variable que hace referencia a una ruta
        dicha ruta va a ser la de la carpeta Storage*/

        cb(null, pathStorage);
        /*finalmente en cb el primer parametro(null) hace referencia en donde se 
        ubicara el archivo si hay un error. A su vez el segundo parametro (pathStorage)
        hace referencia al lugar donde se ubicara el archivo.*/
    },
    filename:function(req,file,cb){
        /*filename hace referencia al nombre que tendra el archivo una vez cargado
        Esto se utiliza para que no se sobreescriban archivos en caso de que tengan el mismo nombre*/

        /*El de a continuacion es uno de miles de metodos que existen*/

        const extension = file.originalname.split(".").pop();
        //se toma la extension del archivo (jpg,mp4,png,mp3,etc.)

        const filename = `file-${Date.now()}.${extension}`;
        //luego al archivo se le introduce un nuevo nombre y se le vuelve a agregar la extension

        cb(null,filename)
        //finalmente declaramos el nombre(filename) que tendran los archivos.

    }
});

const uploadMiddleware = multer({storage});
//posteriormente la variable uploadMiddleware va a hacer referencia a multer ejecutando la funcion declarada (storage)

module.exports = {uploadMiddleware};
//finalmente se exporta todo.

