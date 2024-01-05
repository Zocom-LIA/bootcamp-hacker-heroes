import { createSlice, PayloadAction } from "@reduxjs/toolkit";


//interface CartState is the type of the state managed by the reducer
interface CartState {
    items: object[];
}

//initialState is the initial state of the reducer§
const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //Payload
        addToCart(state, action: PayloadAction<object> ) {
            state.items.push(action.payload)
        },
        
    }
}); 


export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;