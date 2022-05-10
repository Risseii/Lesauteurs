const mongoose = require('mongoose');

const EsquemaAutor = new mongoose.Schema({ //los atributos de la colección autores
    nombre: {
        type: String,
        required:[true,"Nombre es obligatorio"],
        minLength: [2,"Nombre debe tener dos caracteres"],
        unique: [true,"El autor estaba dado de alta"]
    },
    imagen: String,
    libros: {
        type:Boolean,
        default: false
    },
    articulos:{
        type:Boolean,
        default: false
    },
    novelagrafica: {
        type:Boolean,
        default: false,
    },
    cuentos:{
        type:Boolean,
        default: false,
    }
}, {timestamps:true,versionKey: false}); 

//timestamps: creando campos de createdAy y updatedAt

const Autor = mongoose.model("autores",EsquemaAutor); //primero va el nombre de la colección

//exporta el objeto producto(linea 11) y usarlo en otro archivo
module.exports = Autor; 
