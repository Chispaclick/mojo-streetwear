import { useState } from "react";
import { addProduct } from "../services/productService";
import type { Product } from "../services/orders.service";


export const AgregarProducto = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState<Product["category"]>("Hombre");
    const [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const product: Product = {
            name,
            category,
            price,
            active: true,
        };

        await addProduct(product);

        setName("");
        setPrice(0);
        setLoading(false);
        alert("Producto agregado ✅");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
                className="border p-2 w-full"
                required
            />

            <select
                value={category}
                onChange={(e) =>
                    setCategory(e.target.value as Product["category"])
                }
                className="border p-2 w-full"
            >
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
            </select>

            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="border p-2 w-full"
                required
            />

            <button
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2"
            >
                {loading ? "Guardando..." : "Agregar producto"}
            </button>
        </form>
    );
};
