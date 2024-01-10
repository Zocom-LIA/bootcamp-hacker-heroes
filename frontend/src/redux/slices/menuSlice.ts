import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { wontonsItemType, dipItemType, menu } from "@zocom/types";






const initialState:menu = {
    wantons: [],
    dip: [],
}


const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        //Payload
        addWanton(state, action: PayloadAction<wontonsItemType> ) {
            state.wantons.push(action.payload)
        },
        addDip(state, action: PayloadAction<dipItemType> ) {
            state.dip.push(action.payload)
        },

        clearMenu(state) {
            state.wantons = [];
            state.dip = [];
        }
    }
});


export const { addWanton, addDip } = menuSlice.actions;
export default menuSlice.reducer;