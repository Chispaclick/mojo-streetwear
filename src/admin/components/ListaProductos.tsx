import { useEffect, useState } from "react";
import {
    getProducts,
    deleteProduct
} from "../../services/products.service";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/product";

export const ListaProductos = () => {
    const [productos, setProductos] = useState<Product[]>([]);
    const navigate = useNavigate();

    const loadProducts = async () => {
        const data = await getProducts();
        setProductos(data);
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("¿Eliminar producto?")) return;
        await deleteProduct(id);
        loadProducts();
    };

    return (
        <table className="w-full border">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((p) => (
                    <tr key={p.id}>
                        <td>{p.nombre}</td>
                        <td>{p.categoria}</td>
                        <td>{p.precio} €</td>
                        <td className="space-x-2">
                            <button
                                onClick={() => navigate(`/admin/edit-product/${p.id}`)}
                                className="bg-yellow-500 px-2 text-white"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(p.id!)}
                                className="bg-red-600 px-2 text-white"
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};