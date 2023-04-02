## (20) Global State Management and Data Fetching :open_book:

### 1. Global State Management

Global State management merupakan metode yang digunakan ketika program membutuhkan state yang sama dibanyak component yang berbeda, oleh karena itu Glbal State diperlukan untuk memudahkan dalam pengembangan aplikasi website, contoh dari Global State management adalah `Redux`, `Jotai`, `Zustand` dan bawaan dari React Hooks, yaitu `useContext`.

#### Cara Menerapkan React Redux Sebagai Global State Management di Project ReactJs

1.  Install Redux toolkit dan React Redux pada dependency
2.  Buat file Redux Store untuk menampung data.
3.  Hubungkan Store.js dengan React
4.  Buat Redux Slice
5.  Tambahkan Redux Slice ke Store
6.  Gunakan Redux State pada Component

Contoh inialisasi Store.js

```jsx
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

Contoh Menghubungkan Store dengan App React
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

### 2. Redux Thunk
Redux Thunk merupakan tools `middleware` untuk redux yang memungkinkan developer membuat `action creator` yang mengembalikan function bukan `action`.

Contoh Penggunaan Redux Thunk
```jsx
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk)); 

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
function Increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function IncrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(Increment());
    }, 1000);
  };
}
```


### 3. Persisted State
Redux Persist merupakan library dari keluarga redux yang berguna untuk menyimpan state.

Contoh Penulisannya
```jsx
//Import

import { createStore, applyMiddleware } from "redux";
import { persistStorage, persistReducer } from "redux-persist"; 
import storage from "redux-persist/lib/storage"; 
import rootReducer from "./reducers"; 

const persistConfig = {
  key: "root",
  storage, 
};

const persistReducer = persistReducer(persistConfig, rootReducer); 
const store = createStore(persistReducer, applyMiddlerware());
const persistor = persistStore(store);

export { stroe, persistor };
```


### 4. Data Fetching

Data Fetching merpakan proses pertukaran data antara Client dengan Server melalui metode Request-Response.

#### Library Untuk Data Fetching
1. RTX Query
2. Axios
3. SWR
4. Tanstack Query

Contoh penerapan Fetch Data
```jsx
fetch("link-here", {
  method: "get",
})
  .then(function (response) {})
  .catch(function (err) {
  });
```

#### Field Request yang bisa digunakan saat Fetch Data
  | Key     | Value                         |
  | ----------- | ---------------------------- |
  | method      | GET, POST, PUT, DELETE, HEAD |
  | url         | URL dari Request             |
  | body        | Body dari Request            |
  | headers     | Objek dari Headers           |
  | referre     | Referre dari request         |
  | mode        | cors, no-cors, same-origin   |
  | credentials | amit, same-origin            |
  | redirect    | follow, error, manual        |


#### Field Response 
- type
- url
- useFinalURRL
- status: Status code

### Referensi
   - Materi Alta PPT
   - [Redux Toolkit](https://redux-toolkit.js.org/tutorials/quick-start)

