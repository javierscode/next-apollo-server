import React from "react";
import { Person } from "../interfaces";

import { useQuery, gql } from "@apollo/client";

const GET_ALL_PERSONS = gql`
  query {
    getAllPersons {
      name
      city
      country
      phone
    }
  }
`;

const PersonList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_PERSONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul>
      {data.getAllPersons.map((person: Person, index: number) => (
        <li key={index}>{person.name+' - '+person.city+' - '+person.country+' - '+person.phone}</li>
      ))}
    </ul>
  );
};

export default PersonList;
