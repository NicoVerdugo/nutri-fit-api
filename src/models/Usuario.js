const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  peso: Number,
  altura: Number
});

module.exports = mongoose.model("Usuario", usuarioSchema);
