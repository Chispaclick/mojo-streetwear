export const BrandStory = () => {
    return (
        <section className="bg-white px-6 py-24 text-black">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">

                {/* TEXTO */}
                <div>
                    <h2 className="text-section mb-6">
                        Más que ropa, una actitud
                    </h2>

                    <p className="text-body mb-4 text-gray-700">
                        MOJO nace de la calle, de la cultura urbana y de la necesidad de vestir sin seguir normas impuestas. Creemos en la expresión personal como forma de identidad, en el estilo como lenguaje y en la libertad de vestir sin etiquetas.
                    </p>

                    <p className="text-body mb-8 text-gray-700">
                        Cada prenda está pensada para quienes caminan su propio camino, para quienes entienden la moda como una extensión de su carácter. No seguimos tendencias pasajeras: diseñamos piezas con personalidad, equilibrio y propósito.
                    </p>
                    <p className="text-body mb-8 text-gray-700">
                        Apostamos por diseños exclusivos, materiales de calidad y una estética minimalista que no necesita explicación. Menos ruido, más mensaje. Cada detalle importa, cada línea tiene intención.
                    </p>
                    <p className="text-body mb-8 text-gray-700">
                        MOJO no es solo lo que llevas puesto, es cómo te mueves, cómo piensas y cómo te muestras al mundo. Es actitud, es presencia, es calle.
                    </p>

                    <button
                        className="
                            inline-flex items-center
                            border border-black
                            px-8 py-3
                            text-small text-black
                            transition
                            hover:bg-black hover:text-white
                        "
                    >
                        Descubre la colección
                    </button>
                </div>

                {/* IMAGEN */}
                <div className="flex items-center justify-center">
                    <img
                        src="/street-wear-movil.jpeg"
                        alt="MOJO streetwear"
                        className="
                            w-full max-w-md
                            object-cover
                        "
                    />
                </div>

            </div>
        </section>
    );
};

