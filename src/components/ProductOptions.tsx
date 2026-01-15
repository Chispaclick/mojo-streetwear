// components/ProductOptions.tsx
import { useState } from "react";

type Props = {
    productId: string;
};

export const ProductOptions = ({ productId }: Props) => {
    const [size, setSize] = useState<string | null>(null);
    const [color, setColor] = useState<string | null>(null);

    return (
        <div className="flex flex-col gap-6">

            <h1 className="text-2xl font-bold">Camiseta Oversize</h1>
            <p className="text-gray-600">45 €</p>

            {/* TALLAS */}
            <div>
                <p className="mb-2 font-semibold">Talla</p>
                <div className="flex gap-3">
                    {["S", "M", "L", "XL"].map((s) => (
                        <button
                            key={s}
                            onClick={() => setSize(s)}
                            className={`
                h-10 w-10 border
                ${size === s ? "border-black bg-black text-white" : "border-gray-300"}
              `}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            {/* COLORES */}
            <div>
                <p className="mb-2 font-semibold">Color</p>
                <div className="flex gap-3">
                    {["black", "white"].map((c) => (
                        <button
                            key={c}
                            onClick={() => setColor(c)}
                            className={`
                h-8 w-8 rounded-full border
                ${color === c ? "ring-2 ring-black" : ""}
                ${c === "black" ? "bg-black" : "bg-white"}
              `}
                        />
                    ))}
                </div>
            </div>

            {/* CTA */}
            <button
                disabled={!size || !color}
                className="
          mt-6
          bg-black py-4 text-white font-semibold
          disabled:opacity-40
        "
            >
                Añadir al carrito
            </button>
        </div>
    );
};