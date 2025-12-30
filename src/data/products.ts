import type { Product } from "../types/product";


export const products: Product[] = [
    {
        id: "1",
        name: "Camiseta Mojo Negra",
        price: 25,
        image: "/images/Camiseta Mojo Negra.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro"],
    },
    {
        id: "2",
        name: "Camiseta Mojo Blanca",
        price: 25,
        image: "/images/Camiseta Mojo Blanca.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blanco"],
    },
    {
        id: "3",
        name: "Camiseta Mojo Gris",
        price: 25,
        image: "/images/Camiseta Mojo Gris.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gris"],
    },
];