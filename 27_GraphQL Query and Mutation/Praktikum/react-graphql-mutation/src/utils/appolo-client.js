import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://react-msib.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "shDXbWdXI4qxGzBk9hARH6UtJ6uvPnq3e2Fv4kFbUzb0rwlxAkp6w4bWi8AH7c3E",
  },
});

export default client;
