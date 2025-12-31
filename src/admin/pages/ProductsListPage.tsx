import { useEffect, useState } from "react";
import { AdminSidebar } from "../components/AdminSidebar";

import { Link } from "react-router-dom";
import { deleteProduct, getProducts, type Product } from "../services/productService";

export const ProductsListPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
    };

    const handleDelete = async (id?: string) => {
        if (!id) return;
        if (confirm("¿Seguro que quieres eliminar este producto?")) {
            await deleteProduct(id);
            fetchProducts();
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) return <p className="p-6">Cargando...</p>;

    return (
        <div className="flex">
            <AdminSidebar />
            <main className="flex-1 p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-4">Productos</h1>
                <table className="w-full bg-white rounded shadow">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3 text-left">Nombre</th>
                            <th className="p-3 text-left">Precio</th>
                            <th className="p-3 text-left">Categoría</th>
                            <th className="p-3 text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{p.nombre}</td>
                                <td className="p-3">${p.precio}</td>
                                <td className="p-3">{p.categoria}</td>
                                <td className="p-3">
                                    <Link
                                        to={`/admin/edit-product/${p.id}`}
                                        className="text-blue-600 hover:underline mr-3"
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(p.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        Borrar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};