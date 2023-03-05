## (11) Data Structures JavaScript

### 1. Pengertian Data Structure
Struktur data adalah cara menyimpan atau mengatur data secara terstruktur pada sistem komputer dengan tujuan mempermudah penyimpan sampai dengan pengaksesan data. Pengertian data sendiri adalah cakupan luas yang merujuk pada semua tipe informasi yang tersimpan dalam memori komputer. Secara teknis, tipe data dapat berupa bentuk angka, huruf, simbol, dan lainnya.

Macam - macam Data Structures:
   - **Array** -> Merupakan kumpulan data yang saling bersebelahan dan berisikan value data. Dalam pencrian pada array digunakan nomor index yang dimiliki masing - masing data. Nomor indeks ini dimulai dari 0 pada untuk pertama.
   - **Linked List** -> Merupakanstruktur data yang terdiri dari urutan data linier yang dihubungkan satu sama lain sepeti rantai. Penggunaan *Linked List* harus mengakses data secara manual Karena pada *Linked List* tidak memungkinkan melompati data.
   - **Sets** -> Hampir sama dengan *array* tetapi pada *set* tidak memperbolehkan ada duplikasi data.
   - **Stack** -> Merupakan tipe struktur data yang linier dan mengikuti urutan tertentu. Adapun urutan yang digunakan adalah LIFO (Last In First Out) atau FILO (First In Last Out). Tipe data ini dapat diilustrasikan sebagai tumpukan.
   - Masih ada beberapa tipe data lainnya seperti Hash Map, Queue, Tree, dan Graph. [Referensi](https://www.niagahoster.co.id/blog/apa-itu-struktur-data/)

### 2. JavaScript Destructuring
Merupakan ekspresi JavaScript yang memungkinkan untuk membongkar dan menyalin nilai dari array, atau properti dari objek, ke dalam variabel yang berbeda. 

```bash
   let a, b, rest;
   [a, b] = [10, 20];
   console.log(a);//output: 10
   console.log(b);// output: 20
```
Referensi : [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### 3. JavaScript Method
Method merupakan sebuah fungsi yang terkait dengan object, method dapat membuat program sesederhana mungkin sesuai kegunaan masing-masing.

Contoh methods dan fungsinya:
   - `concat()` -> Menggabungkan 2 atau lebih array, dan mengebalikan array yang digabungkan.
   - `map()` -> Mengubah sebuah array baru dengan hasil memanggil fungsi untuk setiap elemen array.
   - `forEach()` -> Memanggil fungsi untuk setiap elemen array.
   - `slice()` -> Mengambil bagian dari array sebagian dari array baru.
   - `filter()` -> Mengambil elemen array baru yang lolos dari seleksi.
   - `reduce()` -> Melakukan operasi pada setiap elemen array menjadi nilai tunggal.

### 4. Normal Flow dan Control Flow
*Normal Flow* adalah pengeksekusian code secara berurutan berdasarkan penulisan code.
*Control Flow* adalah mengatur alur eksekusi code yang dititikberatkan pada statement agar sesuai keinginan. Pada *Control Flow* ada Perulangan dan Pengkondisian.

### Referensi
- Modul PPT
- [MDN](https://developer.mozilla.org/en-US/)
- [Niaga Hoster](https://www.niagahoster.co.id/blog/apa-itu-struktur-data/)