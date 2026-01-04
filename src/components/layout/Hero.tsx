export const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden 
                       bg-[url('/street-wear-movil.jpeg')] sm:bg-[url('/hero.jpg')] bg-cover bg-center h-screen w-full"
        >
            <div className="relative z-10 container mx-auto text-center flex justify-center items-end w-full">
                <div className="w-full items-center justify-center">
                    <img
                        src="/Logo.png"
                        className="hidden sm:block mx-auto w-115"
                    />
                    <div className="flex-col items-center justify-center mb-20">
                        <h1 className="text-3xl sm:text-3xl font-bold text-white mt-2 leading-snug">
                            Streetwear auténtico para quienes no siguen normas.
                        </h1>
                        <p className="text-base text-white mt-1 leading-relaxed">
                            Diseños urbanos, edición limitada y calidad premium.
                        </p>
                    </div>

                    <div className="m2-10 flex flex-col sm:flex-row gap-4 justify-center w-full mb-30">
                        <button className="w-full sm:w-50 bg-white text-black p-4 rounded text-base font-medium">
                            Ver Colección
                        </button>
                        <button className="w-full sm:w-50 border border-white text-white p-4 rounded text-base font-medium">
                            Personalizar
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-30 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/80 rounded-full" />
                </div>
            </div>
        </section>
    );
};
