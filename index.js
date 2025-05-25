const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const { express: playground } = require("graphql-playground-middleware");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");
require("dotenv").config();

const startServer = async () => {
  const app = express();

  // Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  // GraphQL Playground en producción
  app.get("/", playground({ endpoint: "/graphql" }));

  // MongoDB
  const uri = process.env.MONGO_URI;
  mongoose.connect(uri)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch(err => console.error('❌ Error de conexión:', err));

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();


