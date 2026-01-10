import { Link, useLocation } from "react-router-dom";
import { IconamoonEmailLight } from "../icons/IconamoonEmailLight";
import { UilWhatsapp } from "../icons/UilWhatsapp";
import { MynauiInstagram } from "../icons/MynauiInstagram";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <footer className="bg-gray-100 px-6 py-24 text-black">
            <div className="mx-auto max-w-7xl">

                {/* GRID PRINCIPAL */}
                <div className="mb-16 grid grid-cols-1 gap-14 md:grid-cols-3">

                    {/* BRAND */}
                    <div>
                        <img src="/Logo.png" className="mb-6 w-40" alt="Mojo" />

                        <p className="ml-1 max-w-sm text-body leading-relaxed text-gray-700">
                            Camisetas personalizadas de alta calidad para expresar tu estilo único.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h4 className="mb-6 text-body font-semibold tracking-widest uppercase">
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
                                        inline-flex w-fit items-center
                                        text-body text-gray-700 transition
                                        hover:text-gray-400
                                        ${isActive(link.to) ? "border-b-2 border-black" : ""}
                                    `}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* CONTACTO */}
                    <div>
                        <h4 className="mb-6 ml-1 text-body font-semibold tracking-widest uppercase">
                            Contacto
                        </h4>

                        <div className="flex gap-5 text-body">
                            <a
                                href="mailto:info@mojostreet.com"
                                className="text-gray-700 transition hover:text-gray-400"
                                aria-label="Email"
                            >
                                <IconamoonEmailLight />
                            </a>

                            <a
                                href="tel:+34624891941"
                                className="text-gray-700 transition hover:text-gray-400"
                                aria-label="WhatsApp"
                            >
                                <UilWhatsapp />
                            </a>

                            <a
                                href="https://www.instagram.com/mojostreet"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-700 transition hover:text-gray-400"
                                aria-label="Instagram"
                            >
                                <MynauiInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-300 pt-8 md:flex-row">
                    <p className="text-small tracking-wide text-gray-500 text-center md:text-left">
                        © {currentYear} MOJO STREET WEAR. Todos los derechos reservados.
                    </p>

                    <div className="flex gap-8 text-small">
                        <Link
                            to="/terminos-y-condiciones"
                            className={`
                                inline-flex w-fit items-center
                                text-gray-500 transition
                                hover:text-gray-400
                                ${isActive("/terminos-y-condiciones") ? "border-b-2 border-black" : ""}
                            `}
                        >
                            Términos
                        </Link>

                        <Link
                            to="/privacidad"
                            className={`
                                inline-flex w-fit items-center
                                text-gray-500 transition
                                hover:text-gray-400
                                ${isActive("/privacidad") ? "border-b-2 border-black" : ""}
                            `}
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
