## (29) GraphQL Subscription :open_book:

### 1. Apa itu Subcription pada GraphQL

Layaknya sebuah query, `Subscription` memiliki fungsi fetch data. Tetapi `Subscription` adalah operasi jangka panjang yang dapat mengubah hasilnya seiring waktu dan dapat mempertahankan koneksi aktif ke server GraphQL dengan maksud server akan mendorong pembaruan ke hasil `Subscription`. `Subscription` berguna untuk memberi tahu klien secara real time tentang perubahan pada data back-end, seperti pembuatan objek baru atau pembaruan data.

### 2. Menggunakan Subscription pada Client Side

Request
```jsx
export const PRODUCT_SUBSCRIPTION = gql`
  subscription MySubscription {
    product {
      id
      product_name
      product_category
      product_freshness
      additional_information
      price
    }
  }
`;
```

Response
```json
{
  "data": {
    "product": [
      {
        "id": 1,
        "product_name": "Soda OwO",
        "product_category": "Minuman",
        "product_freshness": "New",
        "additional_information": "Soda OwO merupakan anu yang anu dan anu sekali",
        "price": 2000
      }
    ]
  }
}
```

### 3. Cara Implementasi Subscription pada Project React

#### Install Library / Dependency

```bash
   npm install graphql-ws
   # atau
   yarn add graphql-ws
```

#### Initialize a GraphQLWsLink dan Split Communication (HTTPS & WSS)

```jsx
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://react-msib.hasura.app/v1/graphql",
  })
);

const httpLink = new HttpLink({
  uri: "https://react-msib.hasura.app/v1/graphql",
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
```

### Referensi
   - [Apollo Subcription](https://www.apollographql.com/docs/react/data/subscriptions)
   - Tugas Praktikum