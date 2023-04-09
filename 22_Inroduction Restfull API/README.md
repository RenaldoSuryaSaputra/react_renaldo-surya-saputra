## (22) Introduction Restfull API :open_book:

### 1. Apa itu API :question:

Application Programming Interface (API) menentukan prosedur yang diperlukan untuk berkomunikasi dengan sistem perangkat lunak lain database / server. Pembuatan API ditujukan untuk aplikasi lain dapat berkomunikasi dengan aplikasinya secara terprogram. Cara kerja API ialah client me-request data ke server dan server me-response request tersebut dengan mengembalikan data yang diminta client yang umumnya data tersebut berupa `JSON`.

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

