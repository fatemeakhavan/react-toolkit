import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  productId: number;
  quantity: number;
}

const initialState: CartState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const existingItem = state.find(
        (item) => item.productId === action.payload,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ productId: action.payload, quantity: 1 });
      }
    },

    increaseItemCount: (state, action: PayloadAction<number>) => {
      return state.map((item) =>
        item.productId === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    },

    decreaseItemCount: (state, action: PayloadAction<number>) => {
      const item = state.find((item) => item.productId === action.payload);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((item) => item.productId !== action.payload);
      }
    },

    clearCart: () => [],
  },
});

export const { increaseItemCount, decreaseItemCount, clearCart, addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
