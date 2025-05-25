const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Usuario {
    id: ID!
    nombre: String
    edad: Int
    peso: Float
    altura: Float
  }

  type Comida {
    id: ID!
    nombre: String
    calorias: Int
    tipo: String
  }

  type RegistroAlimentacion {
    id: ID!
    usuario: Usuario
    comida: Comida
    fecha: String
    cantidad: Int
  }

  type Ejercicio {
    id: ID!
    nombre: String
    duracion: Int
    tipo: String
  }

  type Progreso {
    id: ID!
    usuario: Usuario
    fecha: String
    pesoActual: Float
    medidas: String
  }

  type Query {
    usuarios: [Usuario]
    comidas: [Comida]
    ejercicios: [Ejercicio]
    registros: [RegistroAlimentacion]
    progresos: [Progreso]
  }

  type Mutation {
    crearUsuario(nombre: String!, edad: Int!, peso: Float!, altura: Float!): Usuario
    crearComida(nombre: String!, calorias: Int!, tipo: String!): Comida
    registrarAlimentacion(usuarioId: ID!, comidaId: ID!, fecha: String!, cantidad: Int!): RegistroAlimentacion
    crearEjercicio(nombre: String!, duracion: Int!, tipo: String!): Ejercicio
    registrarProgreso(usuarioId: ID!, fecha: String!, pesoActual: Float!, medidas: String!): Progreso
  }
`;

module.exports = typeDefs;
