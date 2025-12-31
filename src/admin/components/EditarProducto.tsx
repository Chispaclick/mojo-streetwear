import { useEffect, useState } from "react";
import {
    getProductById,
    updateProduct
} from "../services/productService";
import type { Product } from "../services/productService";

export const EditarProducto = ({ productoId }: { productoId: string }) => {
    const [producto, setProducto] = useState<Product | null>(null);

    useEffect(() => {
        getProductById(productoId).then(setProducto);
    }, [productoId]);

    if (!producto) return <p>Cargando...</p>;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateProduct(productoId, producto);
        alert("Producto actualizado ✅");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                value={producto.nombre}
                onChange={(e) =>
                    setProducto({ ...producto, nombre: e.target.value })
                }
                className="border p-2 w-full"
            />

            <select
                value={producto.categoria}
                onChange={(e) =>
                    setProducto({ ...producto, categoria: e.target.value as any })
                }
                className="border p-2 w-full"
            >
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
            </select>

            <input
                type="number"
                value={producto.precio}
                onChange={(e) =>
                    setProducto({ ...producto, precio: Number(e.target.value) })
                }
                className="border p-2 w-full"
            />

            <button className="bg-green-600 text-white px-4 py-2">
                Guardar cambios
            </button>
        </form>
    );
};