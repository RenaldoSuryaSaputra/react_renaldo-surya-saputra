## (24) Restfull API React

### 1. Apa itu API :question:

Application Programming Interface (API) menentukan prosedur yang diperlukan untuk berkomunikasi dengan sistem perangkat lunak lain database / server. Pembuatan API ditujukan untuk aplikasi lain dapat berkomunikasi dengan aplikasinya secara terprogram. Cara kerja API ialah client me-request data ke server dan server me-response request tersebut dengan mengembalikan data yang diminta client yang umumnya data tersebut berupa `JSON`.

#### Tools untuk HTTP Request

- [Axios](https://axios-http.com/docs/intro)
- [Ky](https://github.com/sindresorhus/ky)
- Fetch API Javascript

### 2. Apa itu REST :question:

Representational State Transfer (REST) adalah arsitektur perangkat lunak yang memberlakukan syarat mengenai cara API bekerja. REST pada awalnya dibuat sebagai panduan untuk mengelola komunikasi pada jaringan kompleks seperti internet.
Dalam penggunaan REST dilengkapi dengan berbagai Request Method HTTP sebagai berikut:

- **GET**
  Membaca data tertentu atau kumpulan data.
- **PUT**
  Memperbarui data tertentu atau kumpulan data
- **DELETE**
  Menghapus data tertentu dengan sebuah pengenal (id).
- **POST**
  Membuat data baru.

#### Contoh Penggunaannya

GET

```jsx
const BASE_URL = "https://6430142fc26d69edc88a5ff1.mockapi.io";
const getProducts = async () => {
  await axios
    .get(`${BASE_URL}/products`)
    .then((response) => setProducts(response.data))
    .catch((err) => {
      console.log("Error: ", err);
    });
};
```

POST
```jsx
const BASE_URL = "https://6430142fc26d69edc88a5ff1.mockapi.io";
const addNewProduct = async ({ id, name }) => {
  await axios
    .post(`${BASE_URL}/products`, {fname: name})
    .then((response) => setProducts((prev) => [...prev, response.data]))
    .catch((err) => {
      console.log("Error: ", err);
    });
};
```

PUT
```jsx
const BASE_URL = "https://6430142fc26d69edc88a5ff1.mockapi.io";
const updateProduct = async ({ id, name }) => {
      await axios.put(`${BASE_URL}/products/${id}`, {
         productName: name
      })
         .then(() => {
            const updateProduct = products.map(product => {
               if (product.id === id) {
                  return { ...product, productName: name }
               }
               return product
            })
            setProducts(updateProduct)
         })
         .catch(error => {
            console.error(error);
         });
   }
```

DELTE
```jsx
const BASE_URL = "https://6430142fc26d69edc88a5ff1.mockapi.io";
   const removeProduct = async (id) => {
      await axios.delete(`${BASE_URL}/products/${id}`)
      setProducts(prev => prev.filter(product => product.id !== id))
   }
```

### 3. Penamaan yang Sesuai berdasarkan Method

Untuk memasukkan (INSERT) data baru ke dalam sistem, dapat menggunakan:

- POST http://www.example.com/customers
- POST http://www.example.com/products

Untuk membaca data dengan ID:

- GET http://www.example.com/customers/332
  URI yang sama akan digunakan untuk PUT dan DELETE, masing-masing untuk memperbarui dan menghapus.
- PUT http://www.example.com/customers/332
- DELETE http://www.example.com/customers/332

### Referensi

- Modul Alta
- [Restfull API Tutorial](https://www.restapitutorial.com/)
