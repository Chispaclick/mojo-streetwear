import type { Product } from "../types/product";

export const products: Product[] = [
    {
        id: "1",
        name: "Mojo Tee Black",
        price: 29.99,
        category: "Hombre",
        imageUrl: "/img/tee-black.jpg",
        description: "Camiseta oversize streetwear",
        stock: 100,
        active: true,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro"],
    },
    {
        id: "2",
        name: "Mojo Tee White",
        price: 29.99,
        category: "Mujer",
        imageUrl: "/img/tee-white.jpg",
        description: "Camiseta oversize streetwear",
        stock: 50,
        active: true,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blanco"],
    },
];