import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getProducts } from "../admin/services/productService";
import type { Product } from "../types/Product";

export const Man = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data.filter(p => p.categoria === "Hombre"));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
                <div key={product.id} className="border p-4 rounded shadow">
                    {product.imagenUrl && <img src={product.imagenUrl} alt={product.nombre} className="mb-2 w-full h-64 object-cover rounded" />}
                    <h2 className="text-xl font-bold">{product.nombre}</h2>
                    <p className="text-gray-600 mb-2">{product.descripcion}</p>
                    <p className="text-lg font-semibold">${product.precio}</p>
                    <Link to={`/producto/${product.id}`} className="text-blue-600 mt-2 block">
                        Ver Producto
                    </Link>
                </div>
            ))}
        </div>
    );
};