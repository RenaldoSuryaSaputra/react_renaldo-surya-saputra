## (27) GraphQL Mutation :open_book:

### 1. Mutation Pada GraphQL

Mutation pada dasarnya adalah fungsi untuk memperbarui, menambahkan, dan menghapus data. Kita perlu mendefinisikan operasi apa yang ingin kita lakukan (berdasarkan operasi yang tersedia di server graphql) dan kemudian mendefinisikan data apa yang perlu dikembalikan oleh GraphQL.

Contoh Mutation

```js
mutation {
   insert_film(
      object:{
         title: "the boy",
         description : "The movies"}){
      returning{
         id
      }
   }
}
```

### 2. Cara Menggunakan GraphQL Mutation

Untuk menggunakan sebuah Mutation, pertama-tama di dalam file project harus memanggil useMutation pada komponen React, useMutation sendiri adalah hooks untuk mengeksekusi Mutation yang tersedia di dalam aplikasi Apollo. Contohnya adalah seperti berikut:

```jsx
import { gql, useMutation } from "@apollo/client";

// Define mutation
const INCREMENT_COUNTER = gql`
  mutation IncrementCounter {
    currentValue
  }
`;

function MyComponent() {
  // Pass mutation to useMutation
  const [mutateFunction, { data, loading, error }] =
    useMutation(INCREMENT_COUNTER);
}
```
Penggunaan fungsi `gql` ditujuka untuk menuliskan Query agar dapat dibaca menjadi dokumen GraphQL yang kemudian akan teruskan ke useMutation.


### 3. useMutation
Hook useMutation mengembalikan sebuah objek yang merepresentasikan proses Mutation. 
Objek yang merepresentasikan status Mutation adalah (data, loading, error, dll.)

Contoh 
```jsx
 const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);
```
Contoh di atas merupkan bentus desstructuring (Data, Loading, dan error) yang digunakan pada proses merender komponen AddTodo.


### Referensi
-  [Apollo Docs](https://www.apollographql.com/docs/react/data/mutations)