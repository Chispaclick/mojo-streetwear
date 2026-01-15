export default function LimitedEditionSection() {
    return (
        <div className="w-full">
            {/* Sección Hero */}
            <section
                className="
                    relative
                    w-full
                    h-200
                    flex
                    items-center
                    justify-center
                    bg-cover
                    bg-top

                    /* MOBILE */
                    bg-[url('/limited-edition-section-3.jpg')]

                    /* DESKTOP */
                    sm:bg-[url('/limited-edition.png')]
                "
            >
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Contenido */}
                <div
                    className="
                        relative z-10
                        text-white

                        /* MOBILE */
                        flex flex-col items-center text-center px-6 ml-0

                        /* DESKTOP (NO SE TOCA) */
                        sm:block sm:text-center sm:ml-170 sm:px-0
                    "
                >
                    {/* Logo */}
                    <img
                        src="/mojo logo edicion limitada.png"
                        width={750}
                        className="
                            /* MOBILE */
                            w-40 mx-auto mb-6

                            /* DESKTOP */
                            sm:w-auto sm:mx-0 sm:mb-0
                        "
                        alt="Mojo Limited Edition"
                    />

                    {/* Título */}
                    <h2
                        className="
                            /* MOBILE */
                            text-3xl mb-3

                            /* DESKTOP */
                            sm:text-5xl sm:mb-2
                            font-bold
                        "
                    >
                        Ediciones Limitadas
                    </h2>

                    {/* Texto */}
                    <p
                        className="
                            /* MOBILE */
                            text-base max-w-sm mx-auto

                            /* DESKTOP */
                            sm:text-lg sm:max-w-xl sm:mx-auto
                            text-white
                        "
                    >
                        Producciones exclusivas y limitadas.
                    </p>

                    {/* Botón */}
                    <div
                        className="
                            mt-10 flex w-full flex-col items-center

                            /* DESKTOP */
                            sm:mt-12 sm:flex sm:w-full sm:flex-col sm:gap-4
                        "
                    >
                        <button
                            className="
                                w-full max-w-xs

                                /* DESKTOP */
                                sm:w-56

                                border border-white
                                px-8 py-4
                                text-white
                                font-semibold
                                transition
                                hover:bg-gray-200 hover:text-black
                            "
                        >
                            Ver
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
