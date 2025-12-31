import { useState } from "react";
import { addProduct } from "../services/productService";

export const AgregarProducto = () => {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState<"Hombre" | "Mujer">("Hombre");
    const [precio, setPrecio] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        await addProduct({ nombre, categoria, precio });

        setNombre("");
        setPrecio(0);
        setLoading(false);
        alert("Producto agregado ✅");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                className="border p-2 w-full"
                required
            />

            <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value as any)}
                className="border p-2 w-full"
            >
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
            </select>

            <input
                type="number"
                value={precio}
                onChange={(e) => setPrecio(Number(e.target.value))}
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