export const WhyMojo = () => {
    return (
        <section className="bg-black px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="mb-16 text-center">
                    <h2 className="text-section mb-4">
                        ¿Por qué elegir MOJO?
                    </h2>
                    <p className="text-body text-gray-400 mx-auto max-w-2xl leading-relaxed">
                        No vendemos moda rápida. Creamos prendas con identidad, pensadas para durar y destacar.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    <div className="rounded border border-gray-700 p-8 transition hover:border-white">
                        <h3 className="text-body font-semibold mb-3">
                            Diseño con actitud
                        </h3>
                        <p className="text-body text-gray-400 leading-relaxed">
                            Cada prenda está diseñada para quienes buscan expresar su personalidad sin seguir tendencias impuestas.
                        </p>
                    </div>

                    <div className="rounded border border-gray-700 p-8 transition hover:border-white">
                        <h3 className="text-body font-semibold mb-3">
                            Calidad premium
                        </h3>
                        <p className="text-body text-gray-400 leading-relaxed">
                            Utilizamos materiales resistentes y cómodos, pensados para el uso diario y una larga durabilidad.
                        </p>
                    </div>

                    <div className="rounded border border-gray-700 p-8 transition hover:border-white">
                        <h3 className="text-body font-semibold mb-3">
                            Ediciones limitadas
                        </h3>
                        <p className="text-body text-gray-400 leading-relaxed">
                            Producciones reducidas para mantener la exclusividad y evitar que vistas como todos los demás.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
