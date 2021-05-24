import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Person {
    name: String!
    phone: Int
    city: String!
    country: String!
  }

  type Query {
    getAllPersons: [Person]
    getPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      name: String!
      phone: Int
      city: String!
      country: String!
    ): Person
  }
`;

export default typeDefs;
