import { useState } from "react";
import { addProduct } from "../services/productService";
import type { Product } from "../../types/Product";

export const AgregarProducto = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState<Product["category"]>("Hombre");
    const [price, setPrice] = useState<number>(0);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const product: Product = {
                name: name.trim(),
                category,
                price,
                active: true,
            };

            await addProduct(product);

            setName("");
            setCategory("Hombre");
            setPrice(0);

            alert("Producto agregado ✅");
        } catch (error) {
            console.error("Error al agregar producto:", error);
            alert("Error al guardar el producto ❌");
        } finally {
            setLoading(false);
        }
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
                placeholder="Precio"
                className="border p-2 w-full"
                min={0}
                required
            />

            <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-4 py-2 disabled:opacity-60"
            >
                {loading ? "Guardando..." : "Agregar producto"}
            </button>
        </form>
    );
};
