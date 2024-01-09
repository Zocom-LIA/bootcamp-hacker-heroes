import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import menuSlice from "./slices/menuSlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice,
        cart:cartSlice
    },
});

//RootState is the type of the state managed by the store
//AppDispatch is the type of the dispatch function of the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;