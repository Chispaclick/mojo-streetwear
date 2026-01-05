// src/components/layout/Footer.tsx
import { Link, useLocation } from "react-router-dom";
import { IconamoonEmailLight } from "../icons/IconamoonEmailLight";
import { UilWhatsapp } from "../icons/UilWhatsapp";
import { MynauiInstagram } from "../icons/MynauiInstagram";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();

    // Función para determinar si el enlace es activo
    const isActive = (path: string) => location.pathname === path;

    return (
        <footer className="bg-gray-100 px-6 py-24 text-black">
            <div className="mx-auto max-w-7xl">

                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-1 gap-14 md:grid-cols-3 mb-16">

                    {/* BRAND */}
                    <div>
                        <img src="/Logo.png" className="w-70" alt="Mojo" />

                        <p className="text-body text-gray-700 leading-relaxed max-w-sm ml-4">
                            Camisetas personalizadas de alta calidad para expresar tu estilo único.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h4 className="text-body font-semibold tracking-widest uppercase mb-6">
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
                                    className={`
    text-body text-gray-700 hover:text-black transition
    ${isActive(link.to) ? "border-b-2 border-black pb-1 inline-block" : "inline-block"}
  `}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* CONTACTO */}
                    <div>
                        <h4 className="text-body font-semibold tracking-widest uppercase mb-6">
                            Contacto
                        </h4>

                        <div className="flex flex-col gap-4 text-body">
                            <a
                                href="mailto:info@mojostreet.com"
                                className="text-gray-700 hover:text-black transition"
                            >
                                <IconamoonEmailLight />
                            </a>

                            <a
                                href="tel:+1234567890"
                                className="text-gray-700 hover:text-black transition"
                            >
                                <UilWhatsapp />
                            </a>

                            <a
                                href="https://www.instagram.com/mojostreet"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-700 hover:text-black transition"
                            >
                                <MynauiInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-300 pt-8 md:flex-row">
                    <p className="text-small text-gray-500 tracking-wide text-center md:text-left">
                        © {currentYear} MOJO STREET WEAR. Todos los derechos reservados.
                    </p>

                    <div className="flex gap-8 text-small">
                        <Link
                            to="/terminos-y-condiciones"
                            className={`text-gray-500 hover:text-black transition ${isActive("/terminos-y-condiciones") ? "border-b-2 border-black pb-1" : ""}`}
                        >
                            Términos
                        </Link>
                        <Link
                            to="/privacidad"
                            className={`text-gray-500 hover:text-black transition ${isActive("/privacidad") ? "border-b-2 border-black pb-1" : ""}`}
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
