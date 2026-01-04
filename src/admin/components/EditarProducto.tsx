import { useEffect, useState } from "react";
import { getProductById, updateProduct } from "../services/productService";
import type { Product } from "../../types/product";


export const EditarProducto = ({ productoId }: { productoId: string }) => {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        getProductById(productoId).then(setProduct);
    }, [productoId]);

    if (!product) return <p>Cargando...</p>;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateProduct(productoId, product);
        alert("Producto actualizado ✅");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                className="border p-2 w-full"
            />

            <select
                value={product.category}
                onChange={(e) =>
                    setProduct({
                        ...product,
                        category: e.target.value as Product["category"],
                    })
                }
                className="border p-2 w-full"
            >
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
            </select>

            <input
                type="number"
                value={product.price}
                onChange={(e) =>
                    setProduct({ ...product, price: Number(e.target.value) })
                }
                className="border p-2 w-full"
            />

            <button className="bg-green-600 text-white px-4 py-2">
                Guardar cambios
            </button>
        </form>
    );
};
