import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartItemType } from "@zocom/types" ;


const initialState: cartItemType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart and if item already exists in cart, update quantity
    addToCart: (state, action: PayloadAction<cartItemType>) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        state.push(action.payload);
      } else {
        state[itemIndex].quantity += action.payload.quantity;
      }

      state.push(action.payload);
    },

    // remove from cart
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },

    updateQuantity: (state,action: PayloadAction<{ id: string; quantity: number }>) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity = action.payload.quantity;
      }
    },

    clearCart: (state) => {
        state = [];
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
