import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { MaterialSymbolsLightShoppingBagOutlineSharp } from "../../icons/MaterialSymbolsLightShoppingBagOutlineSharp";
import { GuidanceUser2 } from "../../icons/GuidanceUser2";
import { StreamlineCyberDoorExit } from "../../icons/StreamlineCyberDoorExit";
import { LetsIconsSettingLineLight } from "../../icons/LetsIconsSettingLineLight";
import { OpenmojiHamburgerMenu } from "../../icons/OpenmojiHamburgerMenu";
import { EiClose } from "../../icons/EiClose";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [sidebarOpen]);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            {/* NAVBAR */}
            <nav className="relative z-50 w-full border-b border-gray-300 bg-gray-100">
                <div className="flex h-20 items-center justify-between px-6">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo-negro.png"
                            alt="Mojo"
                            className="w-36 object-contain"
                        />
                    </Link>

                    {/* LINKS CENTRALES (desktop) */}
                    <div className="hidden md:flex md:gap-8">
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
                                className={`text-sm hover:text-gray-400 ${isActive(link.to)
                                    ? "border-b-2 border-black"
                                    : ""
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* ACCIONES DERECHA */}
                    <div className="flex items-center gap-4">

                        {/* ICONOS SOLO DESKTOP */}
                        <div className="hidden md:flex items-center gap-4">

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

                        {/* HAMBURGER / CLOSE (mobile) */}
                        <button
                            className="md:hidden"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            {sidebarOpen ? <EiClose /> : <OpenmojiHamburgerMenu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* SIDEBAR */}
            <aside
                className={`fixed top-0 right-0 z-40 h-screen w-full bg-white
    transform transition-transform duration-300 ease-in-out
    ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
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
                            onClick={() => setSidebarOpen(false)}
                            className="text-lg"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="mt-auto border-t pt-6">
                        {user ? (
                            <button onClick={handleLogout} className="text-left text-lg">
                                Cerrar sesión
                            </button>
                        ) : (
                            <Link to="/login" className="text-lg">
                                Iniciar sesión
                            </Link>
                        )}
                    </div>
                </div>
            </aside>

        </>
    );
};
