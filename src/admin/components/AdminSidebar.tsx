import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const AdminSidebar = () => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user || user.role !== "admin") return null;
    // icono de dashboard <IwwaDashboard />
    // icono de productos <FluentMdl2Product />
    const links = [
        { name: "Dashboard", path: "/admin/dashboard" },
        { name: "Productos", path: "/admin/products" },
        { name: "Agregar Producto", path: "/admin/add-product" },
    ];

    return (
        <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 min-h-screen">
            <h2 className="text-xl mb-6">Menú principal</h2>
            <nav className="flex flex-col gap-2">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`px-3 py-2 rounded hover:bg-gray-700 ${location.pathname === link.path ? "bg-gray-700 font-bold" : ""}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};