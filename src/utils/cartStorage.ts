import type { CartItem } from "../types/cart";


const CART_KEY = "mojo_cart";

export const loadCart = (): CartItem[] => {
    try {
        const data = localStorage.getItem(CART_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

export const saveCart = (items: CartItem[]) => {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
        // fallback silencioso
    }
};