export const WhyMojo = () => {
    return (
        <section className="bg-black text-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-2xl font-bold mb-4">
                        ¿Por qué elegir MOJO?
                    </h2>
                    <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        No vendemos moda rápida. Creamos prendas con identidad, pensadas para durar y destacar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="border border-gray-700 p-8 hover:border-white transition">
                        <h3 className="text-lg font-semibold mb-3">Diseño con actitud</h3>
                        <p className="text-base text-gray-400 leading-relaxed">
                            Cada prenda está diseñada para quienes buscan expresar su personalidad sin seguir tendencias impuestas.
                        </p>
                    </div>

                    <div className="border border-gray-700 p-8 hover:border-white transition">
                        <h3 className="text-lg font-semibold mb-3">Calidad premium</h3>
                        <p className="text-base text-gray-400 leading-relaxed">
                            Utilizamos materiales resistentes y cómodos, pensados para el uso diario y una larga durabilidad.
                        </p>
                    </div>

                    <div className="border border-gray-700 p-8 hover:border-white transition">
                        <h3 className="text-lg font-semibold mb-3">Ediciones limitadas</h3>
                        <p className="text-base text-gray-400 leading-relaxed">
                            Producciones reducidas para mantener la exclusividad y evitar que vistas como todos los demás.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};