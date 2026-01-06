import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../services/productService";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import type { Product } from "../../types/product";

export const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [imagenFile, setImagenFile] = useState<File | null>(null);

    // 🚀 Fetch product
    useEffect(() => {
        if (!id) return;
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (err) {
                console.error(err);
                alert("Producto no encontrado");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p className="p-6">Cargando...</p>;
    if (!product) return <p className="p-6">Producto no encontrado</p>;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            let imagenUrl = product.imageUrl ?? "";
            if (imagenFile) {
                const storageRef = ref(storage, `productos/${imagenFile.name}`);
                await uploadBytes(storageRef, imagenFile);
                imagenUrl = await getDownloadURL(storageRef);
            }

            // ✅ Pass required fields with defaults to avoid TS errors
            await updateProduct(product.id!, {
                name: product.name ?? "",
                category: product.category ?? "Hombre",
                price: product.price ?? 0,
                description: product.description ?? "",
                imageUrl: imagenUrl,
                stock: product.stock ?? 0,
                active: product.active ?? true,
                sizes: product.sizes ?? [],
                colors: product.colors ?? [],
            });

            navigate("/admin/products");
        } catch (err) {
            console.error(err);
            alert("Error al actualizar el producto");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="flex">
            <main className="flex-1 p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Editar Producto</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md">
                    <label className="block mb-2">
                        Nombre:
                        <input
                            type="text"
                            value={product.name ?? ""}
                            onChange={(e) => setProduct({ ...product, name: e.target.value })}
                            className="w-full border p-2 rounded mt-1"
                            required
                        />
                    </label>

                    <label className="block mb-2">
                        Precio:
                        <input
                            type="number"
                            value={product.price ?? 0}
                            onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
                            className="w-full border p-2 rounded mt-1"
                            required
                        />
                    </label>

                    <label className="block mb-2">
                        Categoría:
                        <select
                            value={product.category ?? "Hombre"}
                            onChange={(e) => setProduct({ ...product, category: e.target.value as "Hombre" | "Mujer" })}
                            className="w-full border p-2 rounded mt-1"
                        >
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                        </select>
                    </label>

                    <label className="block mb-2">
                        Descripción:
                        <textarea
                            value={product.description ?? ""}
                            onChange={(e) => setProduct({ ...product, description: e.target.value })}
                            className="w-full border p-2 rounded mt-1"
                        />
                    </label>

                    <label className="block mb-2">
                        Stock:
                        <input
                            type="number"
                            value={product.stock ?? 0}
                            onChange={(e) => setProduct({ ...product, stock: Number(e.target.value) })}
                            className="w-full border p-2 rounded mt-1"
                        />
                    </label>

                    <label className="block mb-4">
                        Imagen:
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImagenFile(e.target.files?.[0] ?? null)}
                            className="w-full mt-1"
                        />
                    </label>

                    <label className="block mb-4 flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={product.active ?? true}
                            onChange={(e) => setProduct({ ...product, active: e.target.checked })}
                        />
                        Activo
                    </label>

                    <button
                        type="submit"
                        className={`bg-blue-600 text-white px-4 py-2 rounded ${saving ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={saving}
                    >
                        {saving ? "Guardando..." : "Guardar Cambios"}
                    </button>
                </form>
            </main>
        </div>
    );
};
