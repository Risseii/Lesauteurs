const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/autoresdb",{  //cambiar la BD
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conexion con DB"))
    .catch(err => console.log("No se pudo conectar con DB " + err));