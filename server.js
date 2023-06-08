const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { loadfiles, loadFilesSync } = require("@graphql-tools/load-files");

const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
// const
const resolverArray = loadFilesSync("**/*", {
  extensions: ["resolvers.js"],
});

//our data comes form this flow.
const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolverArray,
});

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4500, () => {
  console.log("Running the GraphQL server");
});

//Using a realistic real life graphql project structure
//using resolvers to get data from our model.
