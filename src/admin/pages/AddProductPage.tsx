import { useState } from "react";
import { addProduct } from "../services/productService";
import type { Product } from "../../types/product";
import { CircumImageOn } from "../../icons/CircumImageOn";

export const AddProductPage = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState<Product["category"]>("Hombre");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [active, setActive] = useState(true);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        let imageUrl = "";
        if (imageFile) {
            imageUrl = `/ruta-imagen/${imageFile.name}`;
        }

        const product: Product = {
            name,
            category,
            price,
            stock,
            active,
            image: imageUrl,
        };

        await addProduct(product);

        // Reset de formulario
        setName("");
        setCategory("Hombre");
        setPrice(0);
        setStock(0);
        setActive(true);
        setImageFile(null);
        setLoading(false);
        alert("Producto agregado ✅");
    };

    return (
        <>
            <div
                className="flex flex-col sm:flex-row bg-[url('/street-wear-movil.jpeg')]
                    sm:bg-[url('/hero.jpg')] bg-cover bg-center min-h-screen"
            >
                <div className="flex-1 flex justify-center items-center p-6 mb-20">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row bg-gray-100/80 p-6 rounded shadow max-w-5xl w-full gap-6"
                    >
                        {/* Columna izquierda: información básica */}
                        <div className="flex-1 flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">Información básica</h2>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Ej: Camiseta Urban Black"
                                className="border p-2 w-full rounded"
                                required
                            />
                            <textarea
                                placeholder="Describe el producto..."
                                className="border p-2 w-full rounded"
                                rows={4}
                            />
                            <div className="border-1 border-dashed border-black p-4 rounded text-center">
                                <CircumImageOn className="w-70" />
                                <p className="text-gray-500 mb-2">
                                    Arrastra una imagen o haz clic para seleccionar
                                </p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setImageFile(e.target.files?.[0] || null)
                                    }
                                    className="mx-auto"
                                />
                            </div>
                        </div>

                        {/* Columna derecha: estado, precio e inventario, categoría */}
                        <div className="flex-1 flex flex-col gap-4">
                            <div className="border p-4 rounded">
                                <h3 className="font-semibold mb-2">Estado</h3>
                                <label className="flex items-center gap-2">
                                    <span>Producto activo</span>
                                    <input
                                        type="checkbox"
                                        checked={active}
                                        onChange={(e) => setActive(e.target.checked)}
                                        className="w-5 h-5"
                                    />
                                </label>
                            </div>

                            <div className="border p-4 rounded">
                                <h3 className="font-semibold mb-2">Precio e inventario</h3>
                                <label>
                                    Precio:
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                        placeholder="Precio (USD)"
                                        className="border p-2 w-full rounded mb-2"
                                        required
                                    />
                                </label>
                                <label>
                                    Inventario:
                                    <input
                                        type="number"
                                        value={stock}
                                        onChange={(e) => setStock(Number(e.target.value))}
                                        placeholder="Stock"
                                        className="border p-2 w-full rounded"
                                    />
                                </label>
                            </div>

                            <div className="border p-4 rounded">
                                <h3 className="font-semibold mb-2">Organización</h3>
                                <select
                                    value={category}
                                    onChange={(e) =>
                                        setCategory(e.target.value as Product["category"])
                                    }
                                    className="border p-2 w-full rounded"
                                >
                                    <option value="Hombre">Hombre</option>
                                    <option value="Mujer">Mujer</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-black text-white py-2 rounded"
                            >
                                {loading ? "Guardando..." : "Crear producto"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
