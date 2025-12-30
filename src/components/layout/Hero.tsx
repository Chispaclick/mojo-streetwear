

export const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden 
                       bg-[url('/street-wear-movil.jpeg')] sm:bg-[url('/streetwear.jpg')] bg-cover bg-center h-screen w-full"
        >
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center pt-20">
                <div className="max-w-3xl mx-auto">
                    {/* Logo */}
                    <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                        {/* Solo visible en sm y superior */}
                        <div className="hidden sm:inline-flex flex-col items-center">
                            <img src="/Logo.png" className="w-[550px] sm:w-[550px] w-full max-w-xs" />
                        </div>
                    </div>

                    {/* Tagline */}
                    <p
                        className="text-white text-lg sm:text-xl font-light tracking-wide mb-12 animate-fade-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        Un estilo único, urbano y representativo
                    </p>

                    {/* CTAs */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <button className="w-full sm:w-50 bg-white text-black p-4 rounded">
                            <a href="#productos">Ver Colección</a>
                        </button>
                        <button className="w-full sm:w-50 border border-white text-white p-4 rounded">
                            <a href="#personalizar">Personalizar</a>
                        </button>
                    </div>

                    {/* Features */}
                    <div
                        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-up"
                        style={{ animationDelay: "0.7s" }}
                    >
                        <div className="text-center">
                            <span className="text-2xl sm:text-3xl font-display font-light text-white">3</span>
                            <p className="text-xs tracking-widest mt-1 uppercase text-white">Colores</p>
                        </div>
                        <div className="text-center border-x border-white/50">
                            <span className="text-2xl sm:text-3xl font-display font-light text-white">100%</span>
                            <p className="text-xs tracking-widest mt-1 uppercase text-white">Algodón</p>
                        </div>
                        <div className="text-center">
                            <span className="text-2xl sm:text-3xl font-display font-light text-white">∞</span>
                            <p className="text-xs tracking-widest mt-1 uppercase text-white">Diseños</p>
                        </div>
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
