import { useParams } from "react-router-dom";
import { EditarProducto } from "../components/EditarProducto";

export const EditProductPage = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) return <p>Producto no encontrado</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Editar Producto</h1>
            <EditarProducto productoId={id} />
        </div>
    );
};