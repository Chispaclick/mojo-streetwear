import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const AdminSidebar = () => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user || user.role !== "admin") return null;
    // icono de dashboard <IwwaDashboard />
    // icono de productos <FluentMdl2Product />
    const links = [
        { name: "DASHBOARD", path: "/admin/dashboard" },
        { name: "PRODUCTOS", path: "/admin/products" },
        { name: "AGREGAR PRODUCTO", path: "/admin/add-product" },
    ];

    return (
        <aside className="w-64 bg-gray-100/80 text-black flex flex-col p-4 min-h-screen">
            <nav className="flex flex-col gap-2">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`px-3 py-2 hover:bg-gray-700 ${location.pathname === link.path ? "bg-gray-200 font-bold" : ""}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};