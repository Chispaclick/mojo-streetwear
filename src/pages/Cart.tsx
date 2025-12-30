import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import {
    removeFromCart,
    updateQuantity,
} from "../store/slices/cartSlice";
import { Link } from "react-router-dom";

export const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    const total = items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
    );

    if (items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h2 className="text-2xl font-bold">Tu carrito está vacío</h2>
                <Link
                    to="/tienda"
                    className="inline-block mt-6 px-6 py-3 bg-black text-white rounded"
                >
                    Ir a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8">Carrito</h1>

            {/* Lista de productos */}
            <div className="space-y-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex gap-4 border-b pb-4 items-center"
                    >
                        <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-24 h-24 object-cover rounded"
                        />

                        <div className="flex-1">
                            <h2 className="font-bold">{item.product.name}</h2>
                            <p className="text-sm text-gray-600">
                                Talla: {item.size} · Color: {item.color}
                            </p>
                            <p className="font-semibold mt-1">
                                {item.product.price} €
                            </p>
                        </div>

                        {/* Cantidad */}
                        <input
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(e) =>
                                dispatch(
                                    updateQuantity({
                                        index,
                                        quantity: Number(e.target.value),
                                    })
                                )
                            }
                            className="w-16 border px-2 py-1"
                        />

                        {/* Eliminar */}
                        <button
                            onClick={() => dispatch(removeFromCart(index))}
                            className="text-red-600 hover:underline"
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>

            {/* Total */}
            <div className="mt-10 flex justify-between items-center">
                <p className="text-xl font-bold">Total: {total} €</p>
                <Link
                    to="/checkout"
                    className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
                >
                    Ir a checkout
                </Link>
            </div>
        </div>
    );
};


