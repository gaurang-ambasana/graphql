import express from "express";
import schema from "./utils/schema.js";
import resolvers from "./utils/resolver.js";
import { graphqlHTTP as expressGraphQL } from "express-graphql";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.get("/", (req, res) => res.status(200).send("API is running..."));

app.listen(PORT, () =>
  console.log(`Server is up and running!! from Port: ${PORT}`)
);
