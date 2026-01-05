export const Personalization = () => {
    return (
        <section className="bg-white px-6 py-24 text-black">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">

                {/* TEXTO */}
                <div>
                    <span className="text-small tracking-widest uppercase text-gray-500">
                        Personalización
                    </span>

                    <h2 className="text-section mt-3 mb-6">
                        Tu estilo. Tus reglas.
                    </h2>

                    <p className="text-body mb-4 text-gray-700 leading-relaxed">
                        En MOJO creemos que la ropa debe hablar de ti.
                        Por eso te damos la posibilidad de personalizar
                        cada prenda con detalles únicos.
                    </p>

                    <p className="text-body mb-8 text-gray-700 leading-relaxed">
                        Elige colores, estampados o mensajes y convierte
                        una prenda en algo totalmente personal.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button
                            className="
                                w-full sm:w-auto
                                bg-black px-8 py-3
                                text-small text-white
                                font-semibold
                                transition hover:bg-gray-900
                            "
                        >
                            Personalizar ahora
                        </button>

                        <button
                            className="
                                w-full sm:w-auto
                                border border-black px-8 py-3
                                text-small text-black
                                font-semibold
                                transition hover:bg-black hover:text-white
                            "
                        >
                            Cómo funciona
                        </button>
                    </div>
                </div>

                {/* BLOQUE VISUAL */}
                <div className="flex h-[460px] items-center justify-center px-8">
                    <div className="flex-col text-center">
                        <div className="flex gap-6">


                            <img
                                src="/../images/camiseta personalizada.jpg"
                                alt="Ejemplo de personalización"
                                className="w-60 mx-auto max-w-full object-cover rounded"
                            />
                            <img
                                src="/../images/camiseta personalizada-2.jpg"
                                alt="Ejemplo de personalización"
                                className="w-60 mx-auto max-w-full object-cover rounded"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
