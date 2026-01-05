import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { MaterialSymbolsLightShoppingBagOutlineSharp } from "../../icons/MaterialSymbolsLightShoppingBagOutlineSharp";
import { GuidanceUser2 } from "../../icons/GuidanceUser2";
import { StreamlineCyberDoorExit } from "../../icons/StreamlineCyberDoorExit";

export const Navbar = () => {
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

    return (
        <nav className="w-full border-b border-gray-300 bg-gray-100 text-black">
            <div className="relative flex h-20 items-center justify-between px-6">

                {/* LOGO */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/logo-negro.png"
                        alt="Mojo"
                        className="w-40 object-contain"
                    />
                </Link>

                {/* LINKS CENTRALES */}
                <div className="absolute left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-8">
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
                                className={`
                                    text-small text-black
                                    transition
                                    hover:text-gray-400
                                    ${isActive(link.to) ? "border-b-2 border-black" : ""}
                                `}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {user?.role === "admin" && (
                            <Link
                                to="/admin/dashboard"
                                className={`
                                    text-small text-black font-bold
                                    transition
                                    hover:text-gray-400
                                    ${isActive("/admin/dashboard")
                                        ? "border-b-2 border-black"
                                        : ""}
                                `}
                            >
                                ADMINISTRATIVO
                            </Link>
                        )}
                    </div>
                </div>

                {/* ACCIONES DERECHA */}
                <div className="flex items-center gap-6">
                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="transition hover:text-gray-400"
                            aria-label="Cerrar sesión"
                        >
                            <StreamlineCyberDoorExit />
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="transition hover:text-gray-400"
                            aria-label="Iniciar sesión"
                        >
                            <GuidanceUser2 />
                        </Link>
                    )}

                    <Link
                        to="/carrito"
                        className="relative transition hover:text-gray-400"
                        aria-label="Carrito"
                    >
                        <MaterialSymbolsLightShoppingBagOutlineSharp />

                        {totalItems > 0 && (
                            <span className="
                                absolute -top-2 -right-3
                                rounded-full bg-black px-2 py-0.5
                                text-[0.7rem] font-bold text-white
                            ">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};
