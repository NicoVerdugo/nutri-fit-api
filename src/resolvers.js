const Usuario = require("./models/Usuario");
const Comida = require("./models/Comida");
const Registro = require("./models/RegistroAlimentacion");
const Ejercicio = require("./models/Ejercicio");
const Progreso = require("./models/Progreso");

const resolvers = {
  Query: {
    usuarios: async () => {
      return await Usuario.find();
    },
    comidas: async () => {
      return await Comida.find();
    },
    ejercicios: async () => {
      return await Ejercicio.find();
    },
    registros: async () => {
      return await Registro.find().populate("usuario").populate("comida");
    },
    progresos: async () => {
      return await Progreso.find().populate("usuario");
    },
  },
  Mutation: {
    crearUsuario: async (_, { nombre, edad, peso, altura }) => {
      const nuevoUsuario = new Usuario({ nombre, edad, peso, altura });
      return await nuevoUsuario.save();
    },
    crearComida: async (_, { nombre, calorias, tipo }) => {
      const nuevaComida = new Comida({ nombre, calorias, tipo });
      return await nuevaComida.save();
    },
    crearEjercicio: async (_, { nombre, duracion, tipo }) => {
      const nuevoEjercicio = new Ejercicio({ nombre, duracion, tipo });
      return await nuevoEjercicio.save();
    },
    registrarAlimentacion: async (_, { usuarioId, comidaId, fecha, cantidad }) => {
      const registro = new Registro({ usuario: usuarioId, comida: comidaId, fecha, cantidad });
      return await registro.save();
    },
    registrarProgreso: async (_, { usuarioId, fecha, pesoActual, medidas }) => {
      const progreso = new Progreso({ usuario: usuarioId, fecha, pesoActual, medidas });
      return await progreso.save();
    },
  },
};


module.exports = resolvers;
