import express from "express";
import { ApolloServer } from 'apollo-server-express';
import { buildSchema} from 'type-graphql';
import {
  UserResolver,
} from "./entities";
import {
  userRouter,
  itemRouter,
} from "./routes";

// GraphQL setup function
async function graphqlSetup() {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
    ],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });
  
  return server;
}

const app = express();
(async () => {
  const apolloServer = await graphqlSetup();
  apolloServer.applyMiddleware({ app });
})();

app.use(express.json()); // This is probably not needed since Apollo Server might already configure it for us
app.use("/users", userRouter);
app.use("/items", itemRouter);

export { app };
