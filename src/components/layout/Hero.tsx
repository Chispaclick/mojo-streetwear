

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('/streetwear.jpg')] bg-cover bg-center h-screen w-full">
            {/* Background Image */}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center pt-20">
                <div className="max-w-3xl mx-auto">
                    {/* Logo */}
                    <div className=" animate-fade-up" style={{ animationDelay: "0.1s" }}>
                        <div className="inline-flex flex-col items-center">
                            <img src="/Logo.png" className="w-[550px]" />
                        </div>
                    </div>

                    {/* Tagline */}
                    <p
                        className="text-foreground/90 text-white text-lg md:text-xl font-light tracking-wide mb-12 animate-fade-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        Un estilo único, urbano y representativo
                    </p>

                    {/* CTAs */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <button className="w-50 bg-white text-black p-4">
                            <a href="#productos">Ver Colección</a>
                        </button>
                        <button className="w-50 border-1 border-white text-white  p-4">
                            <a href="#personalizar">Personalizar</a>
                        </button>
                    </div>

                    {/* Features */}
                    <div
                        className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-up"
                        style={{ animationDelay: "0.7s" }}
                    >
                        <div className="text-center">
                            <span className="text-2xl text-white  md:text-3xl font-display font-light text-foreground">3</span>
                            <p className="text-xs text-white  tracking-widest text-muted-foreground mt-1 uppercase">Colores</p>
                        </div>
                        <div className="text-center border-x border-border">
                            <span className="text-2xl text-white  md:text-3xl font-display font-light text-foreground">100%</span>
                            <p className="text-xs text-white  tracking-widest text-muted-foreground mt-1 uppercase">Algodón</p>
                        </div>
                        <div className="text-center">
                            <span className="text-2xl text-white  md:text-3xl font-display font-light text-foreground">∞</span>
                            <p className="text-xs tracking-widest text-muted-foreground mt-1 uppercase">Diseños</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-foreground/50 rounded-full" />
                </div>
            </div>
        </section>
    );
};


