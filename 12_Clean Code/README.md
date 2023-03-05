## (12) Clean Code

### 1. Pengertian Clean Code
Clean code adalah istilah untuk code yang mudah dibaca, dipahami, dan diubah oleh programmer.

#### a. Kenapa harus menggunakan Clen Code?
   - **Work Collaboration** dengan tujuan agar semua orang  bisa membaca apa yang kita kerjakan
   - **Feature Development** tujuannya adalah membantu untuk mengerti fitur baru / code baru yang sedang dikerjakan.
   - **Faster Development** tujuannya ketika code kita tertata dan bersih maka akan lebih mudah proses development.

#### b. Karakteristik clean code:
   - Mudah dipahami, mudah dibaca, dan mudah diubah
   - Mudah dieja dan dicari
   - Singkat namun mendeskripsikan konteks
   - Konsisten
   - Hindari penambahan konteks yang tidak perlu
   - Komentar yang jelas dan tidak berlebihan
   - Terlalu banyak argumen pada function

### 2. Principle Clean Code
#### a. KISS (Keep It So Simple, Stupid)
Menghindari membuat fungsi yang dibuat untuk melakukan lebih dari 1 hal.

Tips untuk KISS:
   - Fungsi atau class harus kecil
   - Fungsi dibuat hanya untuk melakukan 1 tugas saja
   - Jangan menggunakan terlalu banyak argumen
   - Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil, dan jumlahnya minimal

#### b. DRY (Don't Repeat Yourself)
Duplikasi kode terjadi karena sering copy paste kode yang sama. Oleh karena itu untuk menghindari duplikasi kode, maka muncullah prinsip DRY.



Refactoring
Refactoring adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur kode agar lebih baik.
Prinsip KISS dan DRy dapat dicapai dengan cara refactor.

Teknik refactoring:

Membuat abstraksi
Memecah kode dengan fungsi / class
Perbaiki penamaan dan lokasi kode
Deteksi kode yang memiliki duplikasi
