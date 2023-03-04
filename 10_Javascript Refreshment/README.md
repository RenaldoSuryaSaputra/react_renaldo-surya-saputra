## (10) javascript Refreshment

### 1. Mengenal JavaScript (JS)

JavaScript adalah bahasa pemrograman yang dapat menambah interaktivitas ke situs web. Itu ditemukan oleh Brendan Eich. [MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
JavaScript merupakan bahasa pemrograman yang _High-level Programming_, artinya ialah pengkodean pada JavaScript dapat dikatakan mendekati bahasa manusia. JavaScript juga merupakan _Dynamic Variables_ yang berarti penggunaan variable tidak harus ditulisan secara spesifik tipe datanya, karena tipe data tersebut akan disesuaikan langsung oleh JavaScript. JavaScript juga termasuk kedalam bahasa _Interpreted Language_ yang artinya JavaScript menyediakan secara langsung proses kompilasi code pada rangkaikan javaScript sehingga memungkinkan kode untuk langsung dieksekusi sebagai program secara dinamis.

### 2. JavaScript Declaration, Scoping, dan Hoisting

#### a. JavaScripts Declaration

- `var` merupakan variable yang digunakan pada fungsi-scoped atau scoped global, secara opsional berfungsi menginisialisasi suatu nilai. Umumnya deklarasi variable ini jarang digunakan karena perilakunya terhadap Hoisting. Contoh :

```bash
   console.log(i);
   var i = 10;
```

Pada contoh tersebut akan muncul `underfined` hal ini seharusnya tidak sesuai dengan bahasa pemrogamman lain yang seharusnya tidak mengenal variable `i`. Oleh karena itu lebih baik menggunakan `let`.

- `let` merupakan variabel yang digunakan secara terbatas pada ruang lingkup block, atau ekspresi yang digunakannya, tidak seperti kata kunci `var`, yang dapat digunakan secara global, atau secara lokal ke seluruh fungsi di luar lingkup block.

```bash
   let x = 1;
   if (x === 1) {
      let x = 2;
      console.log(x);
   }
   console.log(x);
```
- `const` deklarasi ini digunakan untuk menginialisasi nilai tetap dan hanya bisa dilakukan operasi read (tidak bisa overwrite). Hal ini berarti nilai yang sudah dideklarasi tidak dapat diubah. Terkecuali pada properti milik array / object.
```bash
   const number = 42;
```

#### b. JavaScripts Scoping
Scoping adalah menentukan dimana variabel, fungsi, dan objek diatur dan dapat diakses dalam kode kita, yang berarti ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel.

Ada 3 macam metode scoping yaitu :

   - **Global Scope** -> mendeklarasikan variabel di luar lingkup function atau lingkup block.
   - **Local Scope** -> mendeklarasikan variabel didalam function dan variable tersebut tidak dapat diakses dari luar / global.
   - **Block Scope** -> Penulisan variable di dalam `({})` yang biasanya digunakan saat melakukan *control flow*. Pada kasus ini hanya deklarasi variable `var` saja yang dapat diakses dari luar block scope.

#### c. JavaScripts Hoisting
JavaScript Hoisting mengacu pada proses di mana pencarian variable atau fungsi dilakukan terlebih dahulu oleh sistem, sebelum dideklarasikan.
   - Deklarasi variable `var` dan function adalah hoisted, karena mereka dapat digunakan sebelum dideklarasikan.
   - Deklarasi variable `let` dan `const` tidak hoisted, karena harus ada deklarasi terlebih dahulu sebelum digunakan. 

### 3. JavaScript Value & References
Ada 2 tipe data pada JavaScript, yaitu tipe data primitive dan object.

   - **Primitives** merupakan unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman. contoh tipe data primitives adalah String, Boolean, Number, Undefined, dan Null.

   - **Objects** merupakan unit yang menyimpan properti dan fungsi. contoh tipe data objects adalah Object, Array, Function, Date, Set, dan Map.

Aturan references, jika kita mennyalin nilai / value maka reference memeori akan sama antar kedua variable. Tetapi jika terdapat 2 variable yang dideklarasikan masing - masing maka kedua variable tersebut akan memiliki reference memori yang berbeda satu antar yang lain.

[MDN Declaration Variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
