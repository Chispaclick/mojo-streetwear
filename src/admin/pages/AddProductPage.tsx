import { AgregarProducto } from "../components/AgregarProducto";

export const AddProductPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Agregar Producto</h1>
            <AgregarProducto />
        </div>
    );
};