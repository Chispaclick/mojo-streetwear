import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";

interface CheckoutForm {
    name: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
}

export const Checkout = () => {
    const items = useSelector((state: RootState) => state.cart.items);

    const total = items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
    );

    const [form, setForm] = useState<CheckoutForm>({
        name: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    if (items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h2 className="text-2xl font-bold">No hay productos en el carrito</h2>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* FORMULARIO */}
            <div>
                <h1 className="text-3xl font-bold mb-6">Checkout</h1>

                <div className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border px-4 py-2"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border px-4 py-2"
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Dirección"
                        value={form.address}
                        onChange={handleChange}
                        className="w-full border px-4 py-2"
                    />

                    <input
                        type="text"
                        name="city"
                        placeholder="Ciudad"
                        value={form.city}
                        onChange={handleChange}
                        className="w-full border px-4 py-2"
                    />

                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Código postal"
                        value={form.postalCode}
                        onChange={handleChange}
                        className="w-full border px-4 py-2"
                    />
                </div>

                <button
                    className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                >
                    Pagar {total} €
                </button>
            </div>

            {/* RESUMEN */}
            <div className="border rounded-lg p-6 bg-gray-50">
                <h2 className="text-xl font-bold mb-4">Resumen del pedido</h2>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                            <div>
                                <p className="font-medium">{item.product.name}</p>
                                <p className="text-gray-600">
                                    {item.size} · {item.color} · x{item.quantity}
                                </p>
                            </div>
                            <p>
                                {item.product.price * item.quantity} €
                            </p>
                        </div>
                    ))}
                </div>

                <div className="border-t mt-6 pt-4 flex justify-between font-bold">
                    <p>Total</p>
                    <p>{total} €</p>
                </div>
            </div>
        </div>
    );
};

