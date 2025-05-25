const mongoose = require("mongoose");

const comidaSchema = new mongoose.Schema({
  nombre: String,
  calorias: Number,
  tipo: String
});

module.exports = mongoose.model("Comida", comidaSchema);
