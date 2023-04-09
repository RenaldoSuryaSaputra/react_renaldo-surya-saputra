## (26) Introduction GraphQL :open_book:

### 1. Introduction of GraphQL

GraphQL merupakan query language untuk API dan server side untuk mengeksekusi query, dimana kita bisa mendefine schema dari data yang ingin kita kirim, dan kita mampu meminimaze jumlah field yang kita butuhkan melelui jaringan. Dan dengan menggunakan GraphQL kita hanya menggunakan 1 end point untuk setiap methodnya.

### 2. GraphQL Core Features

- **Query** mengambil data dengan berbasis apa yang kita definisi
- **Mutation** merupakan metode untuk tambah, ubah, dan hapus
- **Subscription** metode untuk mendapatkan update secara realtime

#### Basic Query

REST API
```js
//  REST API
[{
      id: 1,
      title: “Batman”,
      year: “2020”,
      director: {
         id: 3,
      },
      created_at: “2020-12-22T03:16:09.000Z",
      updated_at: “2020-12-23T14:22:20.000Z",
}]

```

GraphQL
```js
//untuk GraphQL Query
{
   query {
      movies {
         id
         title
      }
   }
}


//Result dari GraphQL
{
   movies: [{
      id: 1,
      title: “Batman”,
   }]
}

```


#### Multiple Query GraphQL

```js
{
   query {
      movies {
         id
         title
         director {
            name
            age
         }
      }
   }
}

//RESULT
{
   movies: [{
      id: 1,
      title: “Batman”,
      director: {
         name: “Nolan”,
         age: 51,
      }
   }]
}

```

#### Fragment
   Fragmen GraphQL adalah bagian dari logika yang dapat digunakan bersama di antara beberapa query dan mutasi. Kita dapat menggunakan fragmen untuk menyederhanakan query atau mutasi

FRAGMENT QUERY
```js
fragment FR_Movie on movie {
   title
   year
}

{
   query{
      movies{
         ...FR_Movie
         director{
            name
            age
         }
      }
   }
}

//Result Response
{
   movies:[{
      id:1,
      title:"batman",
      director:{
         name : "Nolan",
         age : 51
      }
   }]
}
```

#### Mutation
   Mutation pada dasarnya adalah fungsi untuk memperbarui, menambahkan, dan menghapus data. Kita perlu mendefinisikan operasi apa yang ingin kita lakukan (berdasarkan operasi yang tersedia di server graphql) dan kemudian mendefinisikan data apa yang perlu dikembalikan oleh GraphQL.

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

#### Subscription
   Subscriptions adalah fitur GraphQL yang memungkinkan server untuk mengirim data ke kliennya ketika peristiwa tertentu terjadi. Subscription biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server mempertahankan koneksi yang stabil ke klien.

```js
subscription{
   person{
      id
      name
   }
}
```

### 3.Hasura
Hasura adalah layanan yang menyediakan graphql dan rest api. Dikelola penuh di hasura cloud atau dihosting sendiri [Hasura](https://hasura.io/) 


### Referensi
   - Modul Alta