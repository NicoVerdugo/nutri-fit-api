require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // Permite introspección en producción
    playground: true     // Activa el Apollo Sandbox en producción
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  const uri = process.env.MONGO_URI;
  mongoose.connect(uri)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch(err => console.error('❌ Error de conexión:', err));

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();

