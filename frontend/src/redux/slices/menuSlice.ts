import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { wontonsItemType, dipItemType, menu } from "@zocom/types";






const initialState:menu = {
    wontons: [],
    dip: [],
}


const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        //Payload
        addWonton(state, action: PayloadAction<wontonsItemType > ) {
            const ItemIndex = state.wontons.findIndex((item) => item.SK === action.payload.SK);
            if(ItemIndex === -1 ) state.wontons.push(action.payload)
            else return 
        },
        addDip(state, action: PayloadAction<dipItemType> ) {
            const ItemIndex = state.dip.findIndex((item) => item.SK === action.payload.SK);
            if(ItemIndex === -1 ) state.dip.push(action.payload)
            else return 
        },

        clearMenu(state) {
            state.wontons = [];
            state.dip = [];
        }
    }
});


export const { addWonton, addDip } = menuSlice.actions;
export default menuSlice.reducer;