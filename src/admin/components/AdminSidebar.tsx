import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const AdminSidebar = () => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user || user.role !== "admin") return null;

    const links = [
        { name: "DASHBOARD", path: "/admin/dashboard" },
        { name: "PRODUCTOS", path: "/admin/products" },
        { name: "AGREGAR PRODUCTO", path: "/admin/add-product" },
    ];

    return (
        <aside
            className={`
        h-full w-64
        bg-gray-100/95 text-black
        flex flex-col p-4
        transform transition-transform duration-300 ease-in-out
      `}
        >
            <nav className="flex flex-col gap-2">
                {links.map((link) => {
                    const isActive = location.pathname === link.path;

                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`
                px-3 py-2
                transition-colors duration-200
                ${isActive ? "border-b border-black w-fit" : ""}
                hover:text-gray-700
              `}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
};
