import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/product";

export const ProductsListPage = () => {
    const [productos, setProductos] = useState<Product[]>([]);
    const navigate = useNavigate();

    const loadProducts = async () => {
        const data = await getProducts();
        setProductos(data);
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleDelete = async (id?: string) => {
        if (!id) return;
        if (!confirm("¿Eliminar producto?")) return;
        await deleteProduct(id);
        loadProducts();
    };

    return (
        <>
            <div className="w-full overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50 text-left text-sm text-gray-600">
                        <tr>
                            <th className="px-4 py-3">Producto</th>
                            <th className="px-4 py-3">Categoría</th>
                            <th className="px-4 py-3">Precio</th>
                            <th className="px-4 py-3">Stock</th>
                            <th className="px-4 py-3">Estado</th>
                            <th className="px-4 py-3 text-center">Acciones</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {productos.map((p) => {
                            const outOfStock = p.stock === 0;

                            return (
                                <tr key={p.id} className="hover:bg-gray-50 transition">
                                    {/* PRODUCTO */}
                                    <td className="px-4 py-4 flex items-center gap-4">
                                        {/* Thumbnail */}
                                        <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-xs text-gray-500 rounded">
                                            IMG
                                        </div>

                                        <div>
                                            <p className="font-semibold text-gray-900">
                                                {p.name}
                                            </p>
                                            {p.description && (
                                                <p className="text-sm text-gray-500">
                                                    {p.description}
                                                </p>
                                            )}
                                        </div>
                                    </td>

                                    {/* CATEGORÍA */}
                                    <td className="px-4 py-4">
                                        <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                                            {p.category}
                                        </span>
                                    </td>

                                    {/* PRECIO */}
                                    <td className="px-4 py-4 font-semibold">
                                        ${p.price.toFixed(2)}
                                    </td>

                                    {/* STOCK */}
                                    <td className="px-4 py-4">
                                        <span
                                            className={`font-medium ${outOfStock ? "text-red-500" : "text-gray-900"
                                                }`}
                                        >
                                            {p.stock} unidades
                                        </span>
                                    </td>

                                    {/* ESTADO */}
                                    <td className="px-4 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium
                                            ${outOfStock
                                                    ? "bg-gray-100 text-gray-500"
                                                    : "bg-black text-white"
                                                }`}
                                        >
                                            {outOfStock ? "Inactivo" : "Activo"}
                                        </span>
                                    </td>

                                    {/* ACCIONES */}
                                    <td className="px-4 py-4">
                                        <div className="flex items-center justify-center gap-4">
                                            <button
                                                onClick={() =>
                                                    navigate(`/admin/edit-product/${p.id}`)
                                                }
                                                className="text-gray-700 hover:text-black transition"
                                                title="Editar"
                                            >
                                                ✏️
                                            </button>

                                            <button
                                                onClick={() => handleDelete(p.id)}
                                                className="text-red-500 hover:text-red-700 transition"
                                                title="Eliminar"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};
