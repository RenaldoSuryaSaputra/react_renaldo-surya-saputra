## (14) React Fundamental :open_book:

### 1. JSX (Javascript XML)

JSX adalah syntaks untuk JavaScript yang memungkinkan penulisan markup language HTML di dalam file JavaScript.

Contoh penulisan JSX pada komponen React.

```bash
   function TodoList() {
      return (
         <>
            <ul>
               <li>Invent new traffic lights</li>
               <li>Rehearse a movie scene</li>
               <li>Improve the spectrum technology</li>
            </ul>
         </>
         );
      }
```

#### JSX :vs: React.createElement

- JSX lebih mempermudahkan penulisan sintaks pada aplikasi React.
- Syntax Sugar atau sintaks yang lebih mudah dibaca oleh programmer

Contoh penggunaan React.createElemet

```bash
   React.createElement(
      MyButton,
      null,
      'Klik'
   );
```

Contoh penggunaan JSX

```bash
   <MyButton>Klik</MyButton>
```

### 2. React Component dan Props

**Apa Itu Komponen?**
Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI.

**Apa Itu Props?**

- Singkatan dari properties, membuat kita dapat memberikan argumen/data pada component.
- Props membantu untuk membuat komponen menjadi lebih dinamis
- Props akan digunakan component sebagai argumen.
- Props pada component adalah read-only dan tidak dapat diubah.

```bash
   function Avatar(props) {
      let person = props.person;
      let size = props.size;
   }
```

### 3. Conditional Rendering

Pada React, kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi kita.

- Menggunakan `if`
- Inline `if` dengan operator AND `&&`
- Inline `if-else` dengan ternary conditional operator
- Mencegah komponen untuk rendering

```bash
// Operator AND
   return (
      <li className="item">
        {isListed && name + ' ✔'}
      </li>
   );
// ternary
   return (
      <li className="item">
        {isListed ? name + ' ✔' : name}
      </li>
   );
```

Pada React juga dimungkinkan untuk melakukan render pada `List` dan operasi yang digunakan adalah `map()`.

### 4. React Styling

- **CSS Classes**

```bash
   render() {
      return <span className="menu navigation-menu">Menu</span>
   }
```

- **Atribute Syle**

```bash
   render() {
      return <span className={{background-color: 'blue'}}>Menu</span>
   }
```

- **Module CSS**

```bash
   import style from './Menu.module.css'

   render() {
      return <span className={style.text}>Menu</span>
   }
```

- **CSS in JS**

#### Referensi

- [ReactJS](reactjs.org)
- [Styling React](https://reactjs.org/docs/faq-styling.html#gatsby-focus-wrapper)
- [React Doc](https://beta.reactjs.org/learn)
