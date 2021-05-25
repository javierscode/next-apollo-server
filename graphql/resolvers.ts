import { Person } from "../interfaces";
interface getPersonArgs {
  name: string;
}

const persons: Array<Person> = [
  {
    name: "Javier",
    phone: 977777777,
    city: "Barcelona",
    country: "Spain",
  },
];

const resolvers = {
  Query: {
    getAllPersons: () => persons,
    getPerson: (_: any, { name }: getPersonArgs) =>
      persons.find((person) => person.name === name),
  },
  Mutation: {
    addPerson: (_: any, args: Person) => {
      persons.push({ ...args });
      return args;
    },
  },
};

export default resolvers;
