const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creamos el Schema
const encuestaSchema = new Schema({
    titulo: String,
    descripcion: String,
    preguntas: [{pregunta:String, respuestas:[]}]
});

//Creamos un modelo
const Encuesta = mongoose.model('Encuesta', encuestaSchema);

//Exportamos el modelo para poderlo usar en cualquier lado
module.exports = Encuesta;

//Para controlar errores
handleError = (err) => console.log("Got an error ", err);
