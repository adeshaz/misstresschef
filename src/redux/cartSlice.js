// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.qty = qty > 0 ? qty : 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions;

// ✅ Selector for totals
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);

export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.qty, 0);

export default cartSlice.reducer;
