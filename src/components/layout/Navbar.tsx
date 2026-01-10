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

interface NavbarProps {
    sidebarOpen?: boolean;
    setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = ({ setSidebarOpen }: NavbarProps) => {
    const items = useSelector((state: RootState) => state.cart.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    const isActive = (path: string) => location.pathname === path;

    const handleAdminSettingsClick = () => {
        navigate("/admin/dashboard");
        setSidebarOpen?.(true);
    };

    return (
        <nav className="relative z-50 w-full border-b border-gray-300 bg-gray-100 text-black">
            <div className="relative flex h-20 items-center justify-between px-6">

                {/* LOGO */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/logo-negro.png"
                        alt="Mojo"
                        className="w-36 md:w-40 object-contain"
                    />
                </Link>
                {/* LINKS CENTRALES (solo desktop) */}
                <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-8">
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
                            className={`text-small transition hover:text-gray-400 ${isActive(link.to) ? "border-b-2 border-black" : ""
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* ACCIONES DERECHA */}
                <div className="flex items-center gap-4 md:gap-6">

                    {/* Admin settings */}
                    {user?.role === "admin" && (
                        <button
                            onClick={handleAdminSettingsClick}
                            aria-label="Panel administrador"
                        >
                            <LetsIconsSettingLineLight />
                        </button>
                    )}

                    {/* Login / Logout */}
                    {user ? (
                        <button
                            onClick={handleLogout}
                            aria-label="Cerrar sesión"
                        >
                            <StreamlineCyberDoorExit />
                        </button>
                    ) : (
                        <Link to="/login" aria-label="Iniciar sesión">
                            <GuidanceUser2 />
                        </Link>
                    )}

                    {/* Carrito */}
                    <Link to="/carrito" className="relative" aria-label="Carrito">
                        <MaterialSymbolsLightShoppingBagOutlineSharp />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-3 rounded-full bg-black px-2 py-0.5 text-[0.7rem] font-bold text-white">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};
