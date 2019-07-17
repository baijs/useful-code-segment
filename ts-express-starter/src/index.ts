import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";

const app = express();
const port = 8080; // default port to listen

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world! ss");
});

app.use("/graphql", graphqlHTTP({
  schema,
  // tslint:disable-next-line:object-literal-sort-keys
  graphiql: true,
}));
// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
