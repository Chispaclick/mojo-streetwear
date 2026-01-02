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
        <nav className="bg-gray-100 text-black border-b border-gray-300 w-full">

            <div className="w-full px-6 h-20 flex items-center justify-between">

                {/* IZQUIERDA - LOGO (PEGADO) */}
                <Link to="/" className="flex items-center">
                    <img src="/logo-negro.png" className="w-40" alt="Mojo" />
                </Link>

                {/* CENTRO - LINKS (CENTRADOS EN PANTALLA) */}
                <div className="absolute left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-8">
                        <Link
                            to="/novedades"
                            className={`hover:text-gray-400 transition ${isActive("/novedades") ? "border-b-2 border-black" : ""
                                }`}
                        >
                            NOVEDADES
                        </Link>

                        <Link
                            to="/hombre"
                            className={`hover:text-gray-400 transition ${isActive("/hombre") ? "border-b-2 border-black" : ""
                                }`}
                        >
                            HOMBRE
                        </Link>

                        <Link
                            to="/mujer"
                            className={`hover:text-gray-400 transition ${isActive("/mujer") ? "border-b-2 border-black" : ""
                                }`}
                        >
                            MUJER
                        </Link>

                        {user && user.role === "admin" && (
                            <Link
                                to="/admin/dashboard"
                                className={`hover:text-gray-400 transition ${isActive("/admin/dashboard")
                                    ? "border-b-2 border-black"
                                    : ""
                                    }`}
                            >
                                ADMINISTRATIVO
                            </Link>
                        )}
                    </div>
                </div>

                {/* DERECHA - USER + CART (PEGADO) */}
                <div className="flex items-center gap-6">
                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="hover:text-gray-400 transition"
                        >
                            <StreamlineCyberDoorExit />
                        </button>
                    ) : (
                        <Link to="/login" className="hover:text-gray-400 transition">
                            <GuidanceUser2 />
                        </Link>
                    )}

                    <Link to="/carrito" className="relative hover:text-gray-400 transition">
                        <MaterialSymbolsLightShoppingBagOutlineSharp />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-3 bg-black text-white text-xs font-bold rounded-full px-2 py-0.5">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>

            </div>
        </nav>
    );
};
