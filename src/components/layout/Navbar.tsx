import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { MaterialSymbolsLightShoppingBagOutlineSharp } from "../../icons/MaterialSymbolsLightShoppingBagOutlineSharp";
import { GuidanceUser2 } from "../../icons/GuidanceUser2";

export const Navbar = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <nav className="bg-white text-black px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
                <img src="/logo-negro.png" className="w-40" />
            </Link>

            {/* Links */}
            <div className="flex items-center gap-6">
                <Link to="/novedades" className="hover:text-gray-400">
                    NOVEDADES
                </Link>
                <Link to="/hombre" className="hover:text-gray-400">
                    HOMBRE
                </Link>
                <Link to="/mujer" className="hover:text-gray-400">
                    MUJER
                </Link>

                {user ? (
                    <>
                        <span className="hover:text-gray-400">
                            Hola, {user.email}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="hover:underline text-sm"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="hover:text-gray-400">
                        <GuidanceUser2 />
                    </Link>
                )}

                <Link to="/carrito" className="relative hover:text-gray-400">
                    <MaterialSymbolsLightShoppingBagOutlineSharp />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-3 bg-white text-black text-xs font-bold rounded-full px-2 py-0.5">
                            {totalItems}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
};


