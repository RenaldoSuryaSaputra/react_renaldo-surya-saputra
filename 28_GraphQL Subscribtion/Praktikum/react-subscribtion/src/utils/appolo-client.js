import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://react-msib.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "shDXbWdXI4qxGzBk9hARH6UtJ6uvPnq3e2Fv4kFbUzb0rwlxAkp6w4bWi8AH7c3E",
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: "https://react-msib.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "shDXbWdXI4qxGzBk9hARH6UtJ6uvPnq3e2Fv4kFbUzb0rwlxAkp6w4bWi8AH7c3E",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
