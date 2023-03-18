## (15) React Event Handling & React State :open_book:

### 1. React State
State pada ReactJS merupakan data yang hanya dimiliki oleh suatu komponen, sehingga state merupakan data pribadi / private. Dengan kata lain State pada komponen adalah objek yang menyimpan beberapa informasi yang dapat berubah di dalam komponen komponen tersebut.

Lalu apa bedanya antara State dengan Props ?
   > `Props` tidak dapat diubah setelah di deklarasikan, sedangkan `State` adalah objek yang dapat digunakan untuk menyimpan data yang dapat diubah sesuai keinginan dan kondisi, serta `State` digunakan untuk mengontrol kondisi pada komponen.
   > `State` dapat digunakan dalam Class Component dan Functional Component dengan menggunakan React Hooks (useState dan metode lainnya).
   > `Props` diatur oleh parent component, sedangkan `State` umumnya diperbarui oleh event handler.

Contoh penulisan State dan Props:
```jsx
   // Class Component
   Class MyClass extends React.Component{
      constructor(props){
         super(props);
         this.state = { attribute : "value" }}
   }

   //Functonal Component
   import { useState } from 'react';
   function MyPosition() {
      const [position, setPosition] = useState(x);
      return (
      
      );
   }
```

### 2. Statefull :vs: Stateless Component
   - **Statefull**
   Merupakan komponen yang dijalankan atau dilengkapi dengan React Hooks `useState` pada functional component dan terdapat `state` pada class component. Nama lain dari Statefull Component adalah Smart Component atau Container Component.

   - **Stateless**
   Component yang tidak memiliki `state` untuk menyimpan data pada internal komponen. Stateless Component hanya menggunakan props sebagai pengantar data dari parent. Nama lain dari Stateless Component adalah Dump Component atau Presentational Component.

Perbedaan antara Statefull dengan Stateless yang lain adalah
| Statefull  | Stateless |
| ------------- | ------------- |
| Melakukan data fetching  | Tidak melakukan data Fetching  |
| Berinteraksi dengan data  | Visualisai data  |
| Unreuseable  | Reusable  | 
| Meneruskan data ke child  | Hanya berkomunikasi dengan parent  |


### 3. React Event Handling
Merupakan suatu metode untuk menangani suatu event / peristiwa yang sedang terjadi dan dipicu oleh pengguna.
Beberapa contoh Event Handling adalah:
   - `onClick`       
   - `onSubmit`
   - `onChange`   
   - `onKeyUp`

Contoh penerapan event handling adalah sebagai berikut
```jsx
      <button onClick={MyFunction}>Click Me</button>
```

#### Referensi
   - Modul Alterra
