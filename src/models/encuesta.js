import { Schema } from "mongoose";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var encuestaSchema = new Schema({
    titulo: String,
    descripcion: String,
    preguntas: [{pregunta:String, respuestas:[]}]
});