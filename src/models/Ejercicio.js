const mongoose = require("mongoose");

const ejercicioSchema = new mongoose.Schema({
  nombre: String,
  duracion: Number,
  tipo: String
});

module.exports = mongoose.model("Ejercicio", ejercicioSchema);
