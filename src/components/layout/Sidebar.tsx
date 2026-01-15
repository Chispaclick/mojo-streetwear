import { Link } from "react-router-dom";
import { useEffect } from "react";

interface SidebarProps {
    open: boolean;
    onClose: () => void;
    user: any;
    onLogout: () => void;
}

export const Sidebar = ({ open, onClose, user, onLogout }: SidebarProps) => {

    // 🔒 BLOQUEO DE SCROLL
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <aside
            className={`fixed top-0 right-0 z-40 h-screen w-full bg-white
            transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="flex h-full flex-col gap-6 p-8 pt-24">

                {[
                    { to: "/novedades", label: "NOVEDADES" },
                    { to: "/hombre", label: "HOMBRE" },
                    { to: "/mujer", label: "MUJER" },
                    { to: "/personaliza", label: "PERSONALIZA" },
                    { to: "/mojo", label: "MOJO" },
                    { to: "/contacto", label: "CONTACTO" },
                ].map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        onClick={onClose}
                        className="text-2xl font-medium"
                    >
                        {link.label}
                    </Link>
                ))}

                <div className="mt-auto border-t pt-6">
                    {user ? (
                        <button onClick={onLogout} className="text-lg">
                            Cerrar sesión
                        </button>
                    ) : (
                        <Link to="/login" onClick={onClose} className="text-lg">
                            Iniciar sesión
                        </Link>
                    )}
                </div>
            </div>
        </aside>
    );
};
