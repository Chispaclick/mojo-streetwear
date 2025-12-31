import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const AdminSidebar = () => {
    const { user } = useAuth();
    const location = useLocation();

    // Si no eres admin, no mostramos nada
    if (!user || user.role !== "admin") return null;

    const links = [
        { name: "Dashboard", path: "/admin/dashboard" },
        { name: "Agregar Producto", path: "/admin/add-product" },
        { name: "Lista Productos", path: "/admin/list-products" },
    ];

    return (
        <aside className="hidden md:flex w-64 h-screen bg-gray-900 text-white flex-col p-4">
            <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
            <nav className="flex flex-col gap-2">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`px-3 py-2 rounded hover:bg-gray-700 ${location.pathname === link.path ? "bg-gray-700 font-bold" : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};
