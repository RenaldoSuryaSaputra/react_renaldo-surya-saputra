## (18) React Routing

### 1. React Router
Router merupakan modul pada React yang bertugas untuk navigasi antar componen / halaman pada Single Page Application (SPA). 

Perbedaan antara Multi Page Application (MPA) dengan Single Page Application (SPA)
> `MPA` merupakan jenis aplikasi website dimana perlu memuat seluruh halaman jika ada permintaan baru dari user.

> `SPA` merupakan jenis aplikasi website dimana hanya ada 1 halaman yang dapat menangani semua aktivitas yang diinta oleh user.

| MPA  | SPA |
| ------------- | ------------- |
| SEO mudah diterapkan  | Waktu loading lebih cepat  |
| Memudahkan pengubahan suatu halaman tertentu  | Lebih responsif  |
| Kecepatan download website lebih lama  | Tidak ada query ke server  | 
| Perlu integrasi antara Frontend dengan Backend  | Meningkatkan pengalaman pengguna  |
| Sering membutuhkan maintenance  | Tidak bagus dalam SEO  |
| Sering ditemukan masalah performa  | Berat saat di buka pertama kali  |
| Perlu integrasi antara Frontend dengan Backend  | Masalah Kompatibilitas browser  |

Perintah untuk menambah dependency react-router pada project

```bash
   //npm 
   npm i react-router-dom --save

   //yarn
   yarn add react-router-dom
```

### 2. Istilah pada React Router
   - `BrowserRouter` menyimpan lokasi saat ini di alamat browser menggunakan URL dan menggunakannya untuk navigasi antar component pada web.
   - `Route` digunakan sebagai pengarah alamat pada web.
   - `Link` digunakan untuk berpindah halaman berdasarkan link yang ditulis pada atribut `to`.
   - `RouterProvide` semua objek router diteruskan ke komponen ini untuk merender aplikasi dan mengaktifkan url lainnya.

### 3. Hook Routing
   - **useHistory**
   useHistory memberi kita akses ke instance riwayat yang dapat anda gunakan untuk bernavigasi contohnya `length, go, length, goBack, goForward, Push`
   - **useLocation**
   useLocation digunakan untuk mengembalikan lokasi objek yang mewakili lokasi URL saat ini.
   - **useParams**
   useParams digunakan untuk mengembalikan object pasangan key/value parameter URL.
   - **useRouteMatch**
   useRouteMatch digunakan untuk mencoba mencocokan URL saat ini dengan cara yang sama seperti `<Route/>`.

#### Referensi
   - Modul PPT Alterra
   - [ReactRouter](https://reactrouter.com/en/main)
   