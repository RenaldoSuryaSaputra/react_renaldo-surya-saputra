## (18) React Form :open_book:

### 1. Basic Form

Form merupakan bagian krusial pada website, form dapat digunakan untuk menghandle inputan dari user atau pengguna. Form banyak ditemukan pada saat login, registrasi, dam pengisian feedback. Biasanya penggunaan form juga dilengkapi dengan input handle atau validasi data yang telah diisikan oleh user. Hal ini bertujuan agar data yang diminta sesuai dengan harapan pengembang form.

#### Beberapa contoh element input pada form.

- `<input>`
- `<textarea>`
- `<select>`
- `radio`
- `checkbox`
- `number`
- dll

### 2. Controlled Component :vs: Uncontrolled Component

**a. Controlled Component**

> Kita dapat menggabungkan cara menyimpan dan memperbarui data menggunakan state pada React. Sebuah elemant input form yang nilainya dikontol oleh React melalui state, cara inilah yang disebut `Controlled Component`

**Contoh Controlled Component**

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleSubmit() {
    alert(`Name: ${name}`);
  }

  return (
    <div className="App">
      <h3>Controlled Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
```

**b. Uncontrolled Component**

> Unconttrolled component adalah dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menuliskan uncontroled component kita bisa menggunakan `useRef` untuk mendapatkan nilai input dari DOM.

**Contoh Uncontrolled Component**

```jsx
   import React, { useRef } from "react";

   function App() {
   const inputRef = useRef(null);

   function handleSubmit() {
      alert(`Name: ${inputRef.current.value}`);
   }

   return (
      <div className="App">
         <h3>Uncontrolled Component</h3>
         <form onSubmit={handleSubmit}>
         <label>Name :</label>
         <input type="text" name="name" ref={inputRef} />
         <button type="submit">Submit</button>
         </form>
      </div>
   );
   }

   export default App;
```

### 3. Basic Validation
a. Client-Side Validation

Validasi yang dilakukan pada sisi klien(browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirim ke server. Validasi ini bisa langsung ditulis pada HTML atau menggunakan Javascript.

b. Server-side Validation

Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali sebelum disimpan di database. Apabila ditemukan kesalahan maka response akan dikirim kembali kepada pengguna.


### Referensi
   - Modul Alta
   - [GG](https://www.geeksforgeeks.org/controlled-vs-uncontrolled-components-in-reactjs/)