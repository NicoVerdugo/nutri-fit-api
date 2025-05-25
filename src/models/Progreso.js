const mongoose = require("mongoose");

const progresoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  fecha: Date,
  pesoActual: Number,
  medidas: String
});

module.exports = mongoose.model("Progreso", progresoSchema);
