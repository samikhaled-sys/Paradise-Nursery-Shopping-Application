import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) => i.id === item.id
      );

      if (!existingItem) {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(
        (item) => item.id !== id
      );
    },

    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find(
        (item) => item.id === id
      );

      if (item) {
        item.quantity += amount;

        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (i) => i.id !== id
          );
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
