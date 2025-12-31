import { useState } from "react";
import { AdminSidebar } from "../components/AdminSidebar";

import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addProduct, type Product } from "../services/productService";

export const AddProductPage = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);
    const [categoria, setCategoria] = useState<"Hombre" | "Mujer">("Hombre");
    const [descripcion, setDescripcion] = useState("");
    const [imagenFile, setImagenFile] = useState<File | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let imagenUrl = "";
        if (imagenFile) {
            const storageRef = ref(storage, `productos/${imagenFile.name}`);
            await uploadBytes(storageRef, imagenFile);
            imagenUrl = await getDownloadURL(storageRef);
        }

        const product: Product = { nombre, precio, categoria, descripcion, imagenUrl };
        await addProduct(product);
        navigate("/admin/products");
    };

    return (
        <div className="flex">
            <AdminSidebar />
            <main className="flex-1 p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Agregar Producto</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md">
                    <label className="block mb-2">
                        Nombre:
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full border p-2 rounded mt-1"
                            required
                        />
                    </label>

                    <label className="block mb-2">
                        Precio:
                        <input
                            type="number"
                            value={precio}
                            onChange={(e) => setPrecio(Number(e.target.value))}
                            className="w-full border p-2 rounded mt-1"
                            required
                        />
                    </label>

                    <label className="block mb-2">
                        Categoría:
                        <select
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value as "Hombre" | "Mujer")}
                            className="w-full border p-2 rounded mt-1"
                        >
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                        </select>
                    </label>

                    <label className="block mb-2">
                        Descripción:
                        <textarea
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            className="w-full border p-2 rounded mt-1"
                        />
                    </label>

                    <label className="block mb-4">
                        Imagen:
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImagenFile(e.target.files?.[0] || null)}
                            className="w-full mt-1"
                        />
                    </label>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                        Guardar
                    </button>
                </form>
            </main>
        </div>
    );
};