const mongoosedb = require('./src/lib/mongoose');
const Encuesta = require('./src/models/encuesta');

//Conectamos la base de datos
mongoosedb.db;

/*
    Construimos el documento basado en el Schema
    *var encuestaDoc es el documento*
    *new Encuesta(); hace referencia al modelo creado en encuesta.js* 
*/
var encuestaDoc = new Encuesta({ titulo: 'prueba4', descripcion: 'prueba4', preguntas:[{pregunta:'prueba4?', 
    respuestas:['respuesta1', 'respuesta2']}, {pregunta: 'si funcionó la prueba 4?', 
    respuestas:['simona la mona', 'nel perro']}] });

//Guardamos el documento en la bd
encuestaDoc.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

//Se cierra la base de datos
//mongoosedb.close();

