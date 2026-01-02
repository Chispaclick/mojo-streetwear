// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 text-black px-6 py-12 mt-16">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">

                    {/* BRAND */}
                    <div>
                        <img src="/Logo.png" className="w-70 mb-2" alt="Mojo" />

                        <p className="text-gray-700 text-base leading-relaxed max-w-sm">
                            Camisetas personalizadas de alta calidad para expresar tu estilo único.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h4 className="text-base tracking-widest uppercase mb-6 font-semibold">
                            Enlaces
                        </h4>

                        <nav className="flex flex-col gap-4">
                            {[
                                { label: "Inicio", to: "/" },
                                { label: "Productos Hombre", to: "/hombre" },
                                { label: "Productos Mujer", to: "/mujer" },
                                { label: "Novedades", to: "/novedades" },
                                { label: "Contacto", to: "/contacto" },
                            ].map(link => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-gray-700 hover:text-black transition text-base"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* CONTACTO */}
                    <div>
                        <h4 className="text-base tracking-widest uppercase mb-6 font-semibold">
                            Contacto
                        </h4>

                        <div className="flex flex-col gap-4 text-base">
                            <a
                                href="mailto:info@mojostreet.com"
                                className="text-gray-700 hover:text-black transition"
                            >
                                info@mojostreet.com
                            </a>

                            <a
                                href="tel:+1234567890"
                                className="text-gray-700 hover:text-black transition"
                            >
                                +1 234 567 890
                            </a>

                            <a
                                href="https://www.instagram.com/mojostreet"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-700 hover:text-black transition"
                            >
                                @mojostreet
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm tracking-wide">
                        © {currentYear} MOJO STREET WEAR. Todos los derechos reservados.
                    </p>

                    <div className="flex gap-8 text-sm">
                        <Link
                            to="/terminos-y-condiciones"
                            className="text-gray-500 hover:text-black transition"
                        >
                            Términos
                        </Link>
                        <Link
                            to="/privacidad"
                            className="text-gray-500 hover:text-black transition"
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
