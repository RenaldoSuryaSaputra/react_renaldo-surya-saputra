## (17) React Hooks

### 1. Apa itu React Hooks :interrobang:
> Hooks adalah tambahan baru di React 16.8. Mereka membiarkan pengembang menggunakan state dan fitur React lainnya tanpa menulis kelas seperti pada Class Component. Karena itu, class Component umumnya tidak lagi diperlukan.

#### Hooks Rules
   - Hooks tersedia untuk React versi 16.8 atau lebih tinggi
   - Hooks hanya dapat dipanggil di dalam function component React. 
   - Hooks hanya dapat dipanggil pada level teratas dari sebuah komponen. 
   - Hooks tidak bisa di deklarasikan di dalam pengkodisisan.
   - Semua yang menggunakan `use` adalah Hook (useState, useRef, useEffect, dll)

### 2. useState Hook
`useState` adalah React Hook yang memungkinkan untuk menambahkan variabel state ke dalam komponen. 
Berikut adalah contoh penulisan useState:
```jsx
   // format
   const [state, setState] = useState(initialState)

   // contoh
   const [name, setName] = useState('Aldo');
```
Penulisan useState menggunakan array yang menampung 2 variable disebut dengan *array destructuring*
   - Pada variable `state` pada pertama kali dirender render maka isi dari variable tersebut adalah `initialState`. 
   - Pada variable `set..` digunakan untuk memperbarui `state` ke nilai yang berbeda dan akan memicu re-render.

Contoh Penggunaan useState
```jsx
   import { useState } from 'react';

   function Penuaan() {
      const [age, setAge] = useState(0);

      function handleClick() {
         setAge(age + 1);
      }
      return (
         <button onClick={handleClick}>
            umur anda {count} 
         </button>
      );
   }
```

### 3. useEffect Hook
`useEffect` adalah React Hook yang memungkinkan Anda menyinkronkan komponen dengan side effect sesuai keinginan.

Format penulisan `useEffect` adalah sebagai berikut:
```jsx 
   useEffect(setup, dependencies?)
```
`setup` merupakan bagian code yang ingin ditambakan, seperti console.log atau alert. Pada bagian ini juga bisa di tambahkan cleanup function yang bersifat optional.
`dependensi` merupakan daftar semua nilai yang akan terpengaruhi oleh kode pada `setup`. Dependency list harus memiliki jumlah item yang konstan dan ditulis sebaris dalam bentuk array / list.

Contoh Penerapan useEffect
```jsx 
   import { useState, useEffect } from 'react'
   function HookCounterOne() {
      const [count, setCount] = useState(0)
      useEffect(() => {
         document.title = `Count ${count} times`
         }, [count]) // dependency list []
      return (
         <div>
            <button onClick = {() => setCount((prev) => prev + 1)}>
               Click {count} times </button>
         </div>
      )  
   }
```


#### Referensi
   - [React.dev](https://react.dev/reference/react)
   - [Geeks](https://www.geeksforgeeks.org/introduction-to-react-hooks/?ref=lbp)
   - Modul Alta
