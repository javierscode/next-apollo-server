import { ApolloServer } from "apollo-server-micro";
import { typeDefs, resolvers } from "../../graphql";

const server = new ApolloServer({ typeDefs, resolvers, playground: true });

export default server.createHandler({ path: "/api/graphql" });

export const config = {
    api: {
      bodyParser: false,
    },
  };