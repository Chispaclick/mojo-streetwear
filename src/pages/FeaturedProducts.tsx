import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
    const featuredProducts = [
        {
            id: "1",
            name: "Camiseta Urban Black",
            price: 29.99,
            images: ["/images/product-1.jpg", "/images/product-1.1.jpg"],
        },
        {
            id: "2",
            name: "Oversize White Mojo",
            price: 32.99,
            images: ["/images/product-2.jpg", "/images/product-2.2.jpg"],
        },
        {
            id: "3",
            name: "Street Logo Tee",
            price: 27.99,
            images: ["/images/product-3.jpg", "/images/product-3-hover.jpg"],
        },
    ];

    return (
        <section className="w-full bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* HEADER */}
                <div className="mb-16 text-center">
                    <h2 className="text-section mb-3">
                        DESTACADOS
                    </h2>

                    {/* Párrafo introductorio arriba */}
                    <p className="text-body text-gray-500 mb-2 max-w-2xl mx-auto leading-relaxed">
                        Descubre nuestra selección de prendas más exclusivas. Cada diseño refleja el estilo urbano, auténtico y sin compromisos que define a MOJO Street Wear.
                    </p>

                    {/* Párrafo debajo del título */}
                    <p className="text-body text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Estos son los drops más recientes, creados en ediciones limitadas para que vistas con identidad y te destaques donde vayas.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/producto/${product.id}`}
                            className="group block"
                        >
                            {/* IMAGE WRAPPER */}
                            <div className="relative overflow-hidden bg-gray-100">

                                {/* IMAGE DEFAULT */}
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="
                                        h-[420px] w-full object-cover
                                        transition-opacity duration-300
                                        group-hover:opacity-0
                                    "
                                />

                                {/* IMAGE HOVER */}
                                <img
                                    src={product.images[1]}
                                    alt={`${product.name} hover`}
                                    className="
                                        absolute inset-0
                                        h-[420px] w-full object-cover
                                        opacity-0
                                        transition-opacity duration-300
                                        group-hover:opacity-100
                                    "
                                />
                            </div>

                            {/* INFO */}
                            <div className="mt-4 flex items-center justify-between">
                                <h3 className="text-body font-medium text-black">
                                    {product.name}
                                </h3>
                                <span className="text-body font-medium text-black">
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
