import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { getProductById, updateProduct, type Product } from "../services/productService";


export const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        const fetch = async () => {
            const data = await getProductById(id);
            setProduct(data);
            setLoading(false);
        };
        fetch();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!id || !product) return;
        await updateProduct(id, product);
        navigate("/admin/products");
    };

    if (loading) return <p className="p-6">Cargando...</p>;

    return (
        <div className="flex">
            <AdminSidebar />
            <main className="flex-1 p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Editar Producto</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md">
                    <label className="block mb-2">
                        Nombre:
                        <input
                            type="text"
                            value={product.nombre}
                            onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
                            className="w-full border p-2 rounded mt-1"
                            required
                        />
                    </label>
                    <label className="block mb-2">
                        Precio:
                        <input
                            type="number"
                            value={product.precio}
                            onChange={(e) => setProduct({ ...product, precio: Number(e.target.value) })}
                            className="w-full border p-2 rounded mt-1"
                            required
                        />
                    </label>
                    <label className="block mb-4">
                        Categoría:
                        <select
                            value={product.categoria}
                            onChange={(e) => setProduct({ ...product, categoria: e.target.value as "Hombre" | "Mujer" })}
                            className="w-full border p-2 rounded mt-1"
                        >
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                        </select>
                    </label>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                        Guardar Cambios
                    </button>
                </form>
            </main>
        </div>
    );
};