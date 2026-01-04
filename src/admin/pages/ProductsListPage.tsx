import { useEffect, useState } from "react";
import { AdminSidebar } from "../components/AdminSidebar";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "../services/productService";

import { Navbar } from "../../components/layout/Navbar";
import type { Product } from "../../types/product";

export const ProductsListPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) return <p className="p-6">Cargando...</p>;

    return (
        <>
            <Navbar />
            <div className="flex">
                <AdminSidebar />
                <main className="flex-1 p-6 bg-gray-100 min-h-screen">
                    <table className="w-full bg-white">
                        <tbody>
                            {products.map((p) => (
                                <tr key={p.id}>
                                    <td>{p.name}</td>
                                    <td>{p.price} €</td>
                                    <td>{p.category}</td>
                                    <td>
                                        <Link to={`/admin/edit-product/${p.id}`}>Editar</Link>
                                        <button onClick={() => deleteProduct(p.id!)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>
        </>
    );
};
