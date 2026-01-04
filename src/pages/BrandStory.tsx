export const BrandStory = () => {
    return (
        <section className="bg-white text-black py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Texto */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Más que ropa, una actitud
                    </h2>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        MOJO nace de la calle, de la cultura urbana y de la necesidad
                        de vestir sin seguir normas impuestas. Cada prenda está diseñada
                        para expresar identidad, carácter y libertad.
                    </p>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Apostamos por diseños exclusivos, materiales de calidad y una
                        estética minimalista que habla por sí sola.
                    </p>

                    <button className="border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition">
                        Descubre la colección
                    </button>
                </div>

                {/* Imagen / bloque visual */}
                <div className="h-105 flex items-center justify-center text-sm text-gray-400">
                    <img src="/street-wear-movil.jpeg" className="bg-cover bg-center w-70" />
                </div>

            </div>
        </section>
    );
};