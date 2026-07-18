import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/product-slice";
import cartSlice from "../features/cart/cart-slice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
