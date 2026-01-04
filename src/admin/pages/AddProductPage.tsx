import { useState } from "react";
import { AdminSidebar } from "../components/AdminSidebar";
import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addProduct } from "../services/productService";
import { FluentSave32Light } from "../../icons/FluentSave32Light";
import { ArcticonsImageCombiner } from "../../icons/ArcticonsImageCombiner";
import { Navbar } from "../../components/layout/Navbar";
import type { Product } from "../services/orders.service";

export const AddProductPage = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);
    const [categoria, setCategoria] = useState<"Hombre" | "Mujer">("Hombre");
    const [descripcion, setDescripcion] = useState("");
    const [imagenFile, setImagenFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            let imageUrl = "";
            if (imagenFile) {
                const storageRef = ref(storage, `productos/${imagenFile.name}`);
                await uploadBytes(storageRef, imagenFile);
                imageUrl = await getDownloadURL(storageRef);
            }

            const product: Product = {
                name: nombre,
                precio,
                category: categoria,
                description: descripcion,
                image: imageUrl,
                stock: 10,
                active: true,
            };

            await addProduct(product);
            navigate("/admin/products");
        } catch (err) {
            console.error(err);
            setError("Hubo un error al guardar el producto.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex min-h-screen bg-gray-100">
                <AdminSidebar />

                <main className="ml-64 flex-1">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white w-full min-h-screen p-8"
                    >
                        {/* HEADER */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-3xl font-bold mb-1">
                                    Nuevo producto
                                </h1>
                                <p className="text-gray-600">
                                    Agrega un nuevo producto al catálogo
                                </p>
                            </div>

                            <button
                                type="submit"
                                className={`bg-black flex items-center gap-2 text-white px-4 py-2 cursor-pointer ${loading
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:opacity-90"
                                    }`}
                                disabled={loading}
                            >
                                <FluentSave32Light />
                                {loading ? "Guardando..." : "Crear Producto"}
                            </button>
                        </div>

                        {error && (
                            <p className="text-red-500 mb-6">{error}</p>
                        )}

                        {/* CONTENIDO */}
                        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
                            {/* COLUMNA IZQUIERDA */}
                            <div className="space-y-6">
                                {/* Información básica */}
                                <div className="border border-gray-300 p-4">
                                    <p className="text-lg font-bold mb-4">
                                        Información básica
                                    </p>

                                    <label className="block mb-4">
                                        Nombre del producto
                                        <input
                                            type="text"
                                            placeholder="Ej: Camiseta Urban Black"
                                            value={nombre}
                                            onChange={(e) =>
                                                setNombre(e.target.value)
                                            }
                                            className="w-full p-2 mt-1 border border-gray-300"
                                            required
                                        />
                                    </label>

                                    <label className="block">
                                        Descripción
                                        <textarea
                                            value={descripcion}
                                            placeholder="Describe el producto"
                                            onChange={(e) =>
                                                setDescripcion(e.target.value)
                                            }
                                            className="w-full p-2 mt-1 border border-gray-300"
                                        />
                                    </label>
                                </div>

                                {/* Imagen */}
                                <div className="border border-gray-300 p-4">
                                    <p className="text-lg font-bold mb-4">
                                        Imagen del producto
                                    </p>

                                    <div className="flex flex-col items-center border-dashed border border-gray-300 p-6 gap-3">
                                        <ArcticonsImageCombiner />

                                        <p className="text-sm text-gray-600 text-center">
                                            Arrastra una imagen o haz clic para
                                            seleccionar
                                        </p>

                                        <button
                                            type="button"
                                            className="bg-black cursor-pointer text-white px-4 py-2 text-sm hover:opacity-90"
                                            onClick={() =>
                                                document
                                                    .getElementById("product-image")
                                                    ?.click()
                                            }
                                        >
                                            Seleccionar imagen
                                        </button>

                                        <input
                                            id="product-image"
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                                setImagenFile(
                                                    e.target.files?.[0] || null
                                                )
                                            }
                                            className="hidden"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* COLUMNA DERECHA */}
                            <div className="space-y-6">
                                {/* Estado */}
                                <div className="border border-gray-300 p-4">
                                    <p className="text-lg font-bold mb-2">
                                        Producto activo
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Visible en la tienda
                                    </p>
                                </div>

                                {/* Precio */}
                                <div className="border border-gray-300 p-4">
                                    <p className="text-lg font-bold mb-2">
                                        Precio
                                    </p>

                                    <label className="block">
                                        Precio en euros
                                        <input
                                            type="number"
                                            value={precio}
                                            onChange={(e) =>
                                                setPrecio(
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full p-2 mt-1 border border-gray-300"
                                            required
                                        />
                                    </label>
                                </div>

                                {/* Categoría */}
                                <div className="border border-gray-300 p-4">
                                    <label className="block">
                                        Categoría
                                        <select
                                            value={categoria}
                                            onChange={(e) =>
                                                setCategoria(
                                                    e.target.value as
                                                    | "Hombre"
                                                    | "Mujer"
                                                )
                                            }
                                            className="w-full p-2 mt-1 border border-gray-300"
                                        >
                                            <option value="Hombre">Hombre</option>
                                            <option value="Mujer">Mujer</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
};
