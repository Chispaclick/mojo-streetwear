// src/components/navbar/Navbar.tsx
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

import { MaterialSymbolsLightShoppingBagOutlineSharp } from "../../icons/MaterialSymbolsLightShoppingBagOutlineSharp";
import { GuidanceUser2 } from "../../icons/GuidanceUser2";
import { StreamlineCyberDoorExit } from "../../icons/StreamlineCyberDoorExit";
import { LetsIconsSettingLineLight } from "../../icons/LetsIconsSettingLineLight";
import { OpenmojiHamburgerMenu } from "../../icons/OpenmojiHamburgerMenu";
import { EiClose } from "../../icons/EiClose";

export const Navbar = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    const { user } = useAuth();
    const navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<MainMenuKey | null>(null);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <div className="relative" onMouseLeave={() => setActiveMenu(null)}>
            {/* NAVBAR PRINCIPAL */}
            <nav className="relative z-50 w-full border-b border-gray-300 bg-gray-100">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                    {/* LOGO */}
                    <Link to="/" className="flex items-center">
                        <img src="/logo-negro.png" alt="Mojo" className="w-36" />
                    </Link>

                    {/* LINKS DESKTOP */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/novedades" className="text-sm">
                            NOVEDADES
                        </Link>

                        <span
                            className={`cursor-pointer text-sm ${activeMenu === "hombre" ? "border-b-2 border-black" : ""
                                }`}
                            onMouseEnter={() => setActiveMenu("hombre")}
                        >
                            HOMBRE
                        </span>

                        <span
                            className={`cursor-pointer text-sm ${activeMenu === "mujer" ? "border-b-2 border-black" : ""
                                }`}
                            onMouseEnter={() => setActiveMenu("mujer")}
                        >
                            MUJER
                        </span>

                        <Link to="/personaliza" className="text-sm">
                            PERSONALIZA
                        </Link>

                        <Link to="/mojo" className="text-sm">
                            MOJO
                        </Link>

                        <Link to="/contacto" className="text-sm">
                            CONTACTO
                        </Link>
                    </div>

                    {/* ACCIONES */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex gap-4">
                            {user?.role === "admin" && (
                                <button onClick={() => navigate("/admin/dashboard")}>
                                    <LetsIconsSettingLineLight />
                                </button>
                            )}

                            {user ? (
                                <button onClick={handleLogout}>
                                    <StreamlineCyberDoorExit />
                                </button>
                            ) : (
                                <Link to="/login">
                                    <GuidanceUser2 />
                                </Link>
                            )}

                            <Link to="/carrito" className="relative">
                                <MaterialSymbolsLightShoppingBagOutlineSharp />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-3 rounded-full bg-black px-2 text-xs text-white">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* MOBILE */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                        >
                            {mobileMenuOpen ? <EiClose /> : <OpenmojiHamburgerMenu />}
                        </button>
                    </div>
                </div>

                {/* SUB NAVBAR */}
                <SubNavbar activeMenu={activeMenu} onClose={() => setActiveMenu(null)} />
            </nav>

            {/* SIDEBAR MOBILE */}
            <Sidebar
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                user={user}
                onLogout={handleLogout}
            />
        </div>
    );
};
