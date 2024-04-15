import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { CountryResolver } from './resolvers/countryResolvers';

async function main() {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const server = new ApolloServer({ schema });

  server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`);
  });
}

main();
