import { ProductHoodieCard } from "../components/ProductHoodieCard";
import { useState } from "react";
import { LetsIconsFilter } from "../icons/LetsIconsFilter";

const products = [
    { id: 1, title: "Sudadera Negra Mojo Flames", price: 70, image: "/../images/t-shirts-man/t-shirts-man-1.jpg" },
    { id: 2, title: "Sudadera Gris Mojo Logo", price: 70, image: "/../images/t-shirts-man/t-shirts-man-2.jpg" },
    { id: 3, title: "Sudadera Beige Mojo Worldwide", price: 70, image: "/../images/t-shirts-man/t-shirts-man-3.jpg" },
    { id: 4, title: "Sudadera Negra Mojo Minimal", price: 70, image: "/../images/t-shirts-man/t-shirts-man-4.jpg" },
    { id: 5, title: "Sudadera Negra Mojo Flames", price: 70, image: "/../images/t-shirts-man/t-shirts-man-5.jpg" },
    { id: 6, title: "Sudadera Gris Mojo Logo", price: 70, image: "/../images/t-shirts-man/t-shirts-man-6.jpg" },
    { id: 7, title: "Sudadera Beige Mojo Worldwide", price: 70, image: "/../images/t-shirts-man/t-shirts-man-7.jpg" },
    { id: 8, title: "Sudadera Negra Mojo Minimal", price: 70, image: "/../images/t-shirts-man/t-shirts-man-8.jpg" },
];

export const TshirtsMan = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; // ejemplo, puedes calcular según productos
    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <main className="w-full">

            {/* HERO */}
            <section className="relative flex min-h-[100vh] items-center bg-[url('/../images/t-shirts-man/hero-t-shirts-man.png')] bg-cover bg-top">
                <div className="w-full min-h-[100vh] flex bg-black/20">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 ">
                        {/* Texto */}
                        <div className="flex flex-col justify-center text-white max-w-xl">
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                                Camisetas para hombre
                            </h1>
                            <p className="mt-4 text-lg text-white/90">
                                Diseños urbanos, edición limitada y calidad premium.
                                Personaliza tu sudadera y marca tu propio camino.
                            </p>
                            <div className="flex mt-8 gap-4">
                                <button className="w-fit bg-black text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition">
                                    Camiseta personalizada
                                </button>
                                <button className="w-fit border border-white px-8 py-2 font-semibold hover:bg-white hover:text-black transition">
                                    Más vendidas
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FILTRAR Y GRID */}
            <section className="container mx-auto px-6 py-12">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold uppercase tracking-wide">
                        Camisetas destacadas
                    </h2>
                    <button
                        className="flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
                        onClick={() => setFilterOpen(!filterOpen)}
                    >
                        Filtrar y ordenar
                        <LetsIconsFilter />
                    </button>
                </div>

                {/* Opciones de filtro (puedes expandir) */}
                {filterOpen && (
                    <div className="mb-6 flex flex-wrap gap-4 bg-gray-50 p-4 rounded border border-gray-200">
                        <button className="px-4 py-2 border rounded hover:bg-black hover:text-white transition">Sudaderas</button>
                        <button className="px-4 py-2 border rounded hover:bg-black hover:text-white transition">Camisetas</button>
                        <button className="px-4 py-2 border rounded hover:bg-black hover:text-white transition">Chándales</button>
                        {/* Agrega más filtros según categorías */}
                    </div>
                )}

                {/* GRID PRODUCTOS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductHoodieCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </div>

                {/* FOOTER / PAGINACIÓN */}
                <div className="flex items-center justify-between mt-12 border-t pt-6">
                    <span className="text-sm text-gray-600">
                        Página: {currentPage} de {totalPages}
                    </span>
                    <button
                        className="px-6 py-2 bg-black text-white font-semibold hover:bg-gray-900 transition"
                        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    >
                        Siguiente
                    </button>
                </div>
            </section>
        </main>
    );
};
