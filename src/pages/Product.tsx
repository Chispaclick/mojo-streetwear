import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

export const Product = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === id);

    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);
    const dispatch = useDispatch();

    if (!product) {
        return <p className="p-6">Producto no encontrado</p>;
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Imagen */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg"
            />

            {/* Info */}
            <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-xl mt-4 font-semibold">
                    {product.price} €
                </p>

                {/* Tallas */}
                <div className="mt-6">
                    <p className="font-medium mb-2">Talla</p>
                    <div className="flex gap-3">
                        {product.sizes?.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-4 py-2 border rounded 
                  ${selectedSize === size
                                        ? "bg-black text-white"
                                        : "bg-white text-black"
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Colores */}
                <div className="mt-6">
                    <p className="font-medium mb-2">Color</p>
                    <div className="flex gap-3">
                        {product.colors?.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`px-4 py-2 border rounded 
                  ${selectedColor === color
                                        ? "bg-black text-white"
                                        : "bg-white text-black"
                                    }`}
                            >
                                {color}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cantidad */}
                <div className="mt-6">
                    <p className="font-medium mb-2">Cantidad</p>
                    <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-20 border px-2 py-1"
                    />
                </div>

                {/* Botón */}
                <button
                    onClick={() =>
                        dispatch(
                            addToCart({
                                product,
                                quantity,
                                size: selectedSize,
                                color: selectedColor,
                            })
                        )
                    }
                    disabled={!selectedSize || !selectedColor}
                    className="mt-8 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition disabled:opacity-50"
                >
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
};


