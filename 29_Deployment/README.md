## (29) Deployment

### 1. Kenapa Perlu Build ?

Tujuan dilakukan build yaitu agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan dan cepat. Selain itu programmer dapat menguji dan memverifikasi apakah aplikasi tersebut berjalan dengan baik atau tidak.

Build App Command

```bash
    npm run build
    yarn run build
```

#### Run Optomized App

Untuk menjalankan aplikasi yang optimal di lokal komputer, maka kita dapat menggunakan **serve**.

```bash
# install serve
npm install -g serve

# run serve
serve -s build
```

### 2. Deployment

Deployment merupakan kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya oleh kita sendiri. Dengan melakukan deploy aplikasi ke lingkungan produksi, kita dapat memastikan bahwa aplikasi tersedia dan berfungsi dengan baik sepanjang waktu.

### 3. Layanan Deploy

#### Surge

Surge merupakan layanan penerbit website statik gratis untuk Front End Developers. Website statik yang menggunakan surge memiliki domain .surge.sh. Surge dapat menerima HTML, CSS, dan JS.

#### Netlify
CLI Netlify adalah platform penyedia layanan build tools sekaligus Continues Deployment. Netlify memungkinkan kita untuk mempublish website secara gratis. Netlify juga sudah terintegrasi dengan Git Host seperti Github dan Gitlab

#### Vercel
Vercel adalah platform bagi para pengembang frontend, memberikan kecepatan dan keandalan yang dibutuhkan oleh programmer untuk meng-online kan.
