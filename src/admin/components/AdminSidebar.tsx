import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface AdminSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user || user.role !== "admin") return null;

    const links = [
        { name: "DASHBOARD", path: "/admin/dashboard" },
        { name: "PRODUCTOS", path: "/admin/products" },
        { name: "AGREGAR PRODUCTO", path: "/admin/add-product" },
    ];

    return (
        <>
            {/* OVERLAY (click fuera = cerrar) */}
            <div
                className={`fixed inset-0 bg-black/40 z-10 transition-opacity duration-300
                ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={onClose}
            />

            {/* SIDEBAR */}
            <aside
                className={`
                    fixed top-0 right-0 h-full w-64
                    bg-gray-100/95 text-black
                    flex flex-col p-4
                    z-20 mt-20
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <nav className="flex flex-col gap-2">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-3 py-2 rounded hover:bg-gray-300 transition
                            ${location.pathname === link.path ? "bg-gray-200 font-bold" : ""}`}
                            onClick={onClose}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
};
