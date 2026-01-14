
export default function LimitedEditionSection() {
    return (
        <div className="w-full">
            {/* Sección Hero */}
            <section
                className="relative w-full h-200 flex items-center justify-center bg-cover bg-top"
                style={{ backgroundImage: "url('/limited-edition.png')" }}
            >
                <div className="absolute inset-0 bg-black/20"></div> {/* Overlay oscuro para contraste */}
                <div className="relative z-10 text-center text-white mt-60 ml-170">
                    <h2 className="text-5xl font-bold mb-2">Ediciones Limitadas</h2>
                    <p className="text-lg max-w-xl mx-auto text-white">
                        Producciones exclusivas y limitadas.
                    </p>
                    <div className="mt-12 flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
                        <button
                            className="
                            w-full sm:w-56
                           border border-white px-8 py-4
                            text-white
                            font-semibold
                            transition hover:bg-gray-200 hover:text-black
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