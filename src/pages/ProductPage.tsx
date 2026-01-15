// pages/ProductPage.tsx
import { useParams } from "react-router-dom";
import { ProductOptions } from "../components/ProductOptions";

export const ProductPage = () => {
    const { id } = useParams();

    return (
        <section className="min-h-screen bg-white px-6 py-20">
            <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2">

                {/* IMAGEN */}
                <div className="bg-gray-100 aspect-square" />

                {/* INFO + OPCIONES */}
                <ProductOptions productId={id!} />

            </div>
        </section>
    );
};
