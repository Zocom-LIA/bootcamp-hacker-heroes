import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartItemType, dipItemType, wontonsItemType } from "@zocom/types" ;


const initialState: wontonsItemType[] | dipItemType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart and if item already exists in cart, update quantity
    addToCart: (state, action: PayloadAction<wontonsItemType  | dipItemType>) => {
      const itemIndex = state.findIndex(
        (item) => item.SK === action.payload.SK
      );
      
      
      if (itemIndex === -1) {
        action.payload.quantity = 1;
        state.push(action.payload);
      } else {
        state[itemIndex].quantity += action.payload.quantity;
      }

      state.push(action.payload);
    },

    // remove from cart
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.SK !== action.payload);
    },

    updateQuantity: (state,action: PayloadAction<{ SK: string; quantity: number }>) => {
      const itemIndex = state.findIndex((item) => item.item.SK === action.payload.SK);
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
