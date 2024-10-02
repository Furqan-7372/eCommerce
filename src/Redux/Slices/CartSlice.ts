import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem } from '../../Interfaces/index'; // Adjust the import based on your file structure

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
        const item = state.items.find(
          (i) => i.id === action.payload.id
        );
        if (item) {
          item.quantity += action.payload.quantity;
        } else {
          state.items.push(action.payload);
        }
      },      
      removeFromCart(state, action: PayloadAction<{ id: string}>) {
        state.items = state.items.filter(
          (item) =>
            item.id !== action.payload.id
        );
      },
    clearCart(state) {
      state.items = [];
    },
    increaseQuantity(state, action: PayloadAction<{ id: string }>) {
        const item = state.items.find((i) => i.id === action.payload.id);
        if (item) {
          item.quantity += 1;
        }
      },
      decreaseQuantity(state, action: PayloadAction<{ id: string }>) {
        const item = state.items.find((i) => i.id === action.payload.id);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;