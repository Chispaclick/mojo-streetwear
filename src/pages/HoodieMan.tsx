import { ProductHoodieCard } from "../components/ProductHoodieCard";

const products = [
    {
        id: 1,
        title: "Sudadera Negra Mojo Flames",
        price: 70,
        image: "/../images/hoodies-man/hoodies-man-1.jpg",
    },
    {
        id: 2,
        title: "Sudadera Gris Mojo Logo",
        price: 70,
        image: "/../images/hoodies-man/hoodies-man-2.jpg",
    },
    {
        id: 3,
        title: "Sudadera Beige Mojo Worldwide",
        price: 70,
        image: "/../images/hoodies-man/hoodies-man-3.jpg",
    },
    {
        id: 4,
        title: "Sudadera Negra Mojo Minimal",
        price: 70,
        image: "/../images/hoodies-man/hoodies-man-4.jpg",
    },
];


export const HoodieMan = () => {
    return (
        <main className="w-full">
            {/* HERO */}
            <section className="relative flex min-h-[100vh] items-center bg-[url('/../images/hoodies-man/hero-hoodies-man-2.png')]
                bg-cover bg-top">
                <div className="w-full min-h-[100vh] flex bg-black/20">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 ">
                        {/* Texto */}
                        <div className="flex flex-col justify-center text-white max-w-xl">
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                                Sudaderas para hombre
                            </h1>

                            <p className="mt-4 text-lg text-white/90">
                                Diseños urbanos, edición limitada y calidad premium.
                                Personaliza tu sudadera y marca tu propio camino.
                            </p>
                            <div className="flex">

                                <button className="mt-8 mr-4 w-fit bg-black text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition">
                                    Sudadera personalizada
                                </button>
                                <button className="mt-8 w-fit border border-white px-8 py-2 font-semibold hover:bg-white hover:text-black transition">
                                    Más vendidas
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GRID PRODUCTOS */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-2xl font-bold uppercase tracking-wide">
                    Sudaderas destacadas
                </h2>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductHoodieCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};