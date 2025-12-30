

export const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden 
                       bg-[url('/street-wear-movil.jpeg')] sm:bg-[url('/streetwear.jpg')] bg-cover bg-center h-screen w-full"
        >
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center pt-20 flex items-end w-full mt-70">
                <div className="w-full">
                    {/* Logo */}
                    <img
                        src="/Logo.png"
                        className="hidden sm:block mx-auto w-[550px]"
                    />

                    {/* CTAs */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full">
                        <button className="w-full sm:w-[320px] bg-white text-black p-4 rounded">
                            Ver Colección
                        </button>
                        <button className="w-full sm:w-[320px] border border-white text-white p-4 rounded">
                            Personalizar
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </div>
        </section>
    );
};
