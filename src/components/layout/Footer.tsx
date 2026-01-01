// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-black text-white px-6 py-6 mt-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="inline-flex flex-col items-start mb-6">
                            <img src="/Logo.png" className="w-50" />
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
                            <Link
                                to="/"
                                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                            >
                                Inicio
                            </Link>
                            <Link
                                to="/hombre"
                                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                            >
                                Productos Hombre
                            </Link>
                            <Link
                                to="/mujer"
                                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                            >
                                Productos Mujer
                            </Link>
                            <Link
                                to="/novedades"
                                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                            >
                                Novedades
                            </Link>
                            <Link
                                to="/contacto"
                                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                            >
                                Contacto
                            </Link>
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
                                href="https://www.instagram.com/mojostreet"
                                target="_blank"
                                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                                rel="noreferrer"
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
                        <Link
                            to="/terminos-y-condiciones"
                            className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-xs"
                        >
                            Términos
                        </Link>
                        <Link
                            to="/privacidad"
                            className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-xs"
                        >
                            Privacidad
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;