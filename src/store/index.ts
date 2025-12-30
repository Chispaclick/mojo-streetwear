import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { saveCart } from "../utils/cartStorage";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

store.subscribe(() => {
    saveCart(store.getState().cart.items);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;