export const Personalization = () => {
    return (
        <section className="bg-white text-black py-24 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                {/* Texto */}
                <div>
                    <span className="text-xs tracking-widest uppercase text-gray-500">
                        Personalización
                    </span>

                    <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">
                        Tu estilo. Tus reglas.
                    </h2>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        En MOJO creemos que la ropa debe hablar de ti.
                        Por eso te damos la posibilidad de personalizar
                        cada prenda con detalles únicos.
                    </p>

                    <p className="text-gray-700 mb-8 leading-relaxed">
                        Elige colores, estampados o mensajes y convierte
                        una prenda en algo totalmente personal.
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-black text-white px-6 py-3 text-sm hover:bg-gray-900 transition">
                            Personalizar ahora
                        </button>

                        <button className="border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition">
                            Cómo funciona
                        </button>
                    </div>
                </div>

                {/* Bloque visual */}
                <div className="h-[460px] bg-gray-100 flex flex-col items-center justify-center text-center px-8">
                    <p className="text-sm text-gray-500 mb-2">
                        Ejemplo de personalización
                    </p>
                    <span className="text-xs text-gray-400 bg-[url('/personalitation.jpg')]">
                        <img src="/personalitation.jpg" className="w-90" />
                    </span>
                </div>

            </div>
        </section>
    );
};
