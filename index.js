require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const graphqlPlayground = require("graphql-playground-middleware-express").default;

const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");

const startServer = async () => {
  const app = express();

  // Inicializa el servidor Apollo
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  // Ruta raíz para abrir GraphQL Playground
  app.get("/", graphqlPlayground({ endpoint: "/graphql" }));

  // Conexión a MongoDB
  const uri = process.env.MONGO_URI;
  mongoose.connect(uri)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch(err => console.error('❌ Error de conexión:', err));

  // Arrancar el servidor
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();



