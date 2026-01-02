// src/components/home/FeaturedProducts.tsx
import { Link } from "react-router-dom";

const featuredProducts = [
    {
        id: "1",
        name: "Camiseta Urban Black",
        price: 29.99,
        image: "/images/product-1.jpg",
    },
    {
        id: "2",
        name: "Oversize White Mojo",
        price: 32.99,
        image: "/images/product-2.jpg",
    },
    {
        id: "3",
        name: "Street Logo Tee",
        price: 27.99,
        image: "/images/product-3.jpg",
    },
];

export const FeaturedProducts = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        DESTACADOS
                    </h2>
                    <p className="mt-2 text-gray-500">
                        Nuestro drop más reciente
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuredProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/producto/${product.id}`}
                            className="group"
                        >
                            <div className="overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[420px] object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-4 flex justify-between items-center">
                                <h3 className="text-base font-medium">
                                    {product.name}
                                </h3>
                                <span className="text-sm font-semibold">
                                    €{product.price}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
