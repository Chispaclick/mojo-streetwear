export const Hero = () => {
    return (
        <section
            className="
                relative
                flex min-h-screen w-full items-center justify-center
                overflow-hidden
                bg-[url('/street-wear-movil.jpeg')]
                bg-cover 
                sm:bg-[url('/hero.jpg')]
                bg-top
            "
        >
            {/* OVERLAY opcional si el fondo molesta */}
            <div className="absolute inset-0 bg-black/30" />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">

                {/*}
                <img
                    src="/Logo.png"
                    alt="MOJO"
                    className="mb-10 hidden w-72 sm:block"
                />

                {/* TEXTO */}
                <h1 className="text-display text-white">
                    MOJO: hecha para los que rompen reglas y marcan su camino.
                </h1>

                <p className="text-body mt-6 max-w-xl text-white/80">
                    Diseños urbanos, edición limitada y calidad premium.
                </p>

                {/* CTA */}
                <div className="mt-12 flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
                    <button
                        className="
                            w-full sm:w-56
                            bg-white px-8 py-4
                            text-black
                            font-semibold
                            transition hover:bg-gray-200
                        "
                    >
                        Ver colección
                    </button>

                    <button
                        className="
                            w-full sm:w-56
                            border border-white
                            px-8 py-4
                            text-white
                            font-semibold
                            transition hover:bg-white hover:text-black
                        "
                    >
                        Personalizar
                    </button>
                </div>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-40 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/80 pt-2">
                    <div className="h-2 w-1 rounded-full bg-white/80" />
                </div>
            </div>
        </section>
    );
};
