## (21) React Testing :open_book:

### 1. Testing

_Testing_ merupakan proses memverifikasi bahwa test assertions yang dibuat telah benar dan bahwa code yang kita buat tetap benar sepanjang aplikasi. Test assertion ini adalah ekspresi `boolean` yang mengembalikan nilai `true` kecuali ada bug di kode kita.

#### Kenapa Testing :question:

Software testing merupakan salah satu proses yang memiliki manfaat cukup besar terutama bagi perusahaan dalam melakukan pengujian software, karena testing adalah sebuah hal yang perlu dilakukan setiap kali perusahaan akan meluncurkan sebuah software ataupun aplikasi jika masih memiliki waktu untuk melakukannya.

Adapun untuk beberapa manfaat Testing yaitu sebagai berikut.

- Meningkatkan keamanan dalam software
- Menemukan kompatibilitas software dengan berbagai perangkat dan platform
- Meningkatkan kualitas produk
- Memastikan fitur dalam software sudah sesuai dengan kebutuhan pelanggan

### 2. Tools Test untuk React

- Jest
- React Testing Library
- Vitest

#### Create Basic Testing With RTL (React Testing Library)

**Saat Rendering Component**

Fungsi `render()` RTL akan merender file `.jsx` apapun yang diperlukan saat melakukan test, setelah itu baru bisa memiliki akses ke komponen React

Contoh Penerapannya

```jsx
import React from "react";
import { render, screen } from "@testng-library/react";

import App from "./App";

describe("App", () => {
  test("renders App Component", () => {
    render(<App />);

    screen.debug();
  });
});
```

**Saat Ingin Memilih Element**

RTL menawarkan fungsi untuk mendapatkan element pada element yang ditarget, contohnya dengan `getByText` untuk mengakses dari element yang sudah dipilih

```jsx
import React from "react";
import { render, screen } from "@testng-library/react";

import App from "./App";

describe("App", () => {
  test("renders App Component", () => {
    render(<App />);
    screen.getByText("Search");
    expect(screen.getByText("Search")).toBeIntTheDocument();
  });
});
```


### 3. Testing Custom Hooks

Saat menggunakan Testing Custom Hook, kita harus menggunakan library tambahan dengan. 
Cara install sebagai berikut :
`yarn add -D @testing-library/react-hooks`


Contoh Custom Testing dengan Hook
main.jsx
```jsx
import { useState, useEffect } from "react";
export function useUpperCase(initialValue) {
  const transformed = initialValue.toUpperCase();
  const [value, setValue] = useState(transformed);

  const update = (newValue) => {
    setValue(newValue.toUpperCase());
  };

  useEffect(() => {
    setValue(initialValue.toUpperCase());
  }, [initialValue]);

  return { value, update };
}
```

main.test.js
```js
import { renderHook } from "@testing-library/react-hooks";
import { useUpperCase } from "./useUpperCase";

describe("when rendered", () => {
  it("returns current initial value, uppercased", () => {
    const { result } = renderHook(() => useUpperCase("test string"));

    expect(result.current.value).toEqual("TEST STRING");
  });
});
```

### Referensi
   - Modul Alta
   - [TopKaarir](https://www.topkarir.com/article/detail/apa-itu-software-testing-berikut-pengertian-jenis-cara-kerja-dan-manfaatnya)
