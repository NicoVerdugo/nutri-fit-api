const mongoose = require("mongoose");

const registroAlimentacionSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  comida: { type: mongoose.Schema.Types.ObjectId, ref: "Comida" },
  fecha: Date,
  cantidad: Number
});

module.exports = mongoose.model("RegistroAlimentacion", registroAlimentacionSchema);
