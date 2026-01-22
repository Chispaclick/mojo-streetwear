import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useState } from "react";

import { SubNavbar } from "./SubNavbar";
import { Sidebar } from "./Sidebar";
import type { MainMenuKey } from "../../types/navbar.config";

export const Navbar = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    const { user } = useAuth();
    const navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<MainMenuKey | null>(null);

    const handleMenu = (menu: MainMenuKey) => {
        if (activeMenu !== menu) setActiveMenu(menu);
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <div className="relative">
            <nav className="relative z-50 w-full border-b bg-gray-100">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                    <Link to="/">
                        <img src="/logo-negro.png" className="w-36" />
                    </Link>

                    <div
                        className="hidden md:flex gap-8"
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <Link to="/novedades">NOVEDADES</Link>
                        <span onMouseEnter={() => handleMenu("hombre")}>HOMBRE</span>
                        <span onMouseEnter={() => handleMenu("mujer")}>MUJER</span>
                        <Link to="/personaliza">PERSONALIZA</Link>
                        <Link to="/mojo">MOJO</Link>
                        <Link to="/contacto">CONTACTO</Link>
                    </div>

                    <div className="flex gap-4">
                        {user?.role === "admin" && (
                            <button onClick={() => navigate("/admin/dashboard")}>
                                ⚙️
                            </button>
                        )}

                        {user ? (
                            <button onClick={handleLogout}>🚪</button>
                        ) : (
                            <Link to="/login">👤</Link>
                        )}

                        <Link to="/carrito">🛒 {totalItems}</Link>
                    </div>
                </div>

                <SubNavbar
                    activeMenu={activeMenu}
                    onClose={() => setActiveMenu(null)}
                />
            </nav>

            <Sidebar
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                user={user}
                onLogout={handleLogout}
            />
        </div>
    );
};
