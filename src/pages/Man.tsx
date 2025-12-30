

import ProductCard from "../components/ui/ProductCard";
import type { Product } from "../types/product";


// Mock data de ejemplo
const products: Product[] = [
    {
        id: "1",
        name: "Camiseta Negra",
        price: 25,
        image: "/images/camiseta-negra.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro"],
    },
    {
        id: "2",
        name: "Camiseta Blanca",
        price: 25,
        image: "/images/camiseta-blanca.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blanco"],
    },
    {
        id: "3",
        name: "Camiseta Gris",
        price: 25,
        image: "/images/camiseta-gris.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gris"],
    },
    {
        id: "4",
        name: "Camiseta Negra",
        price: 25,
        image: "/images/camiseta-negra.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro"],
    },
    {
        id: "5",
        name: "Camiseta Blanca",
        price: 25,
        image: "/images/camiseta-blanca.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blanco"],
    },
    {
        id: "6",
        name: "Camiseta Gris",
        price: 25,
        image: "/images/camiseta-gris.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gris"],
    },
];

export const Man = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8">Camisetas de Hombre</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
