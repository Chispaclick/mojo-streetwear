import { useState } from "react";
import {
    CustomTShirt,
    TShirtColor,
    TShirtSize,
} from "../types/customTShirt";
import { calculateTShirtPrice } from "../utils/calculateTShirtPrice";

const COLORS: { key: TShirtColor; class: string; label: string }[] = [
    { key: "black", class: "bg-black", label: "Negro" },
    { key: "white", class: "bg-white border", label: "Blanco" },
    { key: "gray", class: "bg-gray-400", label: "Gris" },
    { key: "pink", class: "bg-pink-300", label: "Rosa" },
    { key: "olive", class: "bg-olive-600", label: "Verde oliva" },
];

const SIZES: TShirtSize[] = ["XS", "S", "M", "L", "XL", "XXL"];

const initialState: CustomTShirt = {
    color: "black",
    size: "M",
    customization: "none",
    hasText: false,
    hasImage: false,
    extras: {
        innerLabel: false,
        premiumPackaging: false,
    },
};

export const CustomTShirtConfigurator = () => {
    const [config, setConfig] = useState<CustomTShirt>(initialState);
    const price = calculateTShirtPrice(config);

    return (
        <div className="grid gap-10 md:grid-cols-2 px-52">
            {/* PREVIEW FAKE */}
            <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Vista previa</span>
            </div>

            {/* CONFIGURADOR */}
            <div className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold uppercase">
                    Personaliza tu camiseta
                </h2>

                {/* COLOR */}
                <div>
                    <p className="mb-3 font-semibold">Color</p>
                    <div className="flex gap-3">
                        {COLORS.map((c) => (
                            <button
                                key={c.key}
                                onClick={() =>
                                    setConfig({ ...config, color: c.key })
                                }
                                className={`
                  h-10 w-10 rounded-full
                  ${c.class}
                  ${config.color === c.key ? "ring-2 ring-black" : ""}
                `}
                                title={c.label}
                            />
                        ))}
                    </div>
                </div>

                {/* TALLA */}
                <div>
                    <p className="mb-3 font-semibold">Talla</p>
                    <div className="flex gap-3">
                        {SIZES.map((s) => (
                            <button
                                key={s}
                                onClick={() =>
                                    setConfig({ ...config, size: s })
                                }
                                className={`
                  h-10 w-10 border
                  ${config.size === s
                                        ? "border-black bg-black text-white"
                                        : "border-gray-300"
                                    }
                `}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* PERSONALIZACIÓN */}
                <div>
                    <p className="mb-3 font-semibold">Personalización</p>
                    <div className="flex flex-col gap-3">
                        {["none", "embroidery", "vinyl", "dtf"].map((type) => (
                            <button
                                key={type}
                                onClick={() =>
                                    setConfig({
                                        ...config,
                                        customization: type as any,
                                    })
                                }
                                className={`
                  border px-4 py-3 text-left
                  ${config.customization === type
                                        ? "border-black bg-black text-white"
                                        : "border-gray-300"
                                    }
                `}
                            >
                                {type === "none" && "Sin personalización"}
                                {type === "embroidery" && "Bordado premium"}
                                {type === "vinyl" && "Estampado vinilo"}
                                {type === "dtf" && "Estampado DTF"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* EXTRAS */}
                <div>
                    <p className="mb-3 font-semibold">Extras</p>
                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={config.extras.innerLabel}
                            onChange={(e) =>
                                setConfig({
                                    ...config,
                                    extras: {
                                        ...config.extras,
                                        innerLabel: e.target.checked,
                                    },
                                })
                            }
                        />
                        Etiqueta interior personalizada (+3 €)
                    </label>

                    <label className="mt-2 flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={config.extras.premiumPackaging}
                            onChange={(e) =>
                                setConfig({
                                    ...config,
                                    extras: {
                                        ...config.extras,
                                        premiumPackaging: e.target.checked,
                                    },
                                })
                            }
                        />
                        Empaquetado premium (+4 €)
                    </label>
                </div>

                {/* PRECIO + CTA */}
                <div className="mt-6 border-t pt-6">
                    <p className="text-lg font-semibold">
                        Total: {price.toFixed(2)} €
                    </p>

                    <button
                        className="
              mt-4 w-full
              bg-black py-4 text-white font-semibold
              hover:bg-gray-800 transition
            "
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};
