
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-black text-white px-6 py-6 mt-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="inline-flex flex-col items-start mb-6">
                            <div className="bg-primary-foreground px-4 py-1">
                                <span className="text-primary font-display text-xl font-light tracking-[0.3em]">
                                    MOJO
                                </span>
                            </div>
                            <span className="text-primary-foreground text-[10px] tracking-[0.25em] mt-1 font-light">
                                STREET WEAR
                            </span>
                        </div>
                        <p className="text-primary-foreground/70 text-sm font-light max-w-xs">
                            Camisetas personalizadas de alta calidad para expresar tu estilo único.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm tracking-widest uppercase mb-6 font-medium">
                            Enlaces
                        </h4>
                        <nav className="flex flex-col gap-3">
                            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                                Inicio
                            </a>
                            <a href="#productos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                                Productos
                            </a>
                            <a href="#personalizar" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                                Personalizar
                            </a>
                            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                                Contacto
                            </a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm tracking-widest uppercase mb-6 font-medium">
                            Contacto
                        </h4>
                        <div className="flex flex-col gap-4">
                            <a
                                href="mailto:info@mojostreet.com"
                                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                            >

                                info@mojostreet.com
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                            >

                                +1 234 567 890
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                            >

                                @mojostreet
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-primary-foreground/50 text-xs tracking-wider">
                        © {currentYear} MOJO STREET WEAR. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-xs">
                            Términos
                        </a>
                        <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-xs">
                            Privacidad
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;