import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../types/cart";
import { loadCart } from "../../utils/cartStorage";


interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: loadCart(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                (item) =>
                    item.product.id === action.payload.product.id &&
                    item.size === action.payload.size &&
                    item.color === action.payload.color
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items.splice(action.payload, 1);
        },

        updateQuantity: (
            state,
            action: PayloadAction<{ index: number; quantity: number }>
        ) => {
            state.items[action.payload.index].quantity = action.payload.quantity;
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;