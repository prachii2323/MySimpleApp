import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (state[product.id]) {
        state[product.id].quantity += 1;
      } else {
        state[product.id] = { ...product, quantity: 1 };
      }
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      state[productId].quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      if (state[productId].quantity > 1) {
        state[productId].quantity -= 1;
      } else {
        delete state[productId];
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
