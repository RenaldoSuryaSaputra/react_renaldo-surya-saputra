import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Doe",
      productPrice: "Doe",
      image: "Doe",
      additionalDescription: "Doe",
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    updateProduct: (state, action) => {
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.productName = action.payload.productName;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
