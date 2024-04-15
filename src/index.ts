import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { CountryResolver } from './resolvers/countryResolvers';

async function startApolloServer() {
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({ schema });

  const PORT = process.env.PORT || 4000;

  server.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

startApolloServer();
