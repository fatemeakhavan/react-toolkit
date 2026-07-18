import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  id: number;
  name: string;
  description: string;
  price: number;
  imag: string;
}

const initialState: ProductState[] = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<{
        name: string;
        description: string;
        price: number;
        imag: string;
      }>,
    ) => {
      state.push({
        id: Date.now(),
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        imag: action.payload.imag,
      });
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item?.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
