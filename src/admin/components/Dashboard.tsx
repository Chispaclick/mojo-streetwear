import { ListaProductos } from "./ListaProductos";

export const Dashboard = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Panel de Administración</h2>
            <p>Bienvenido al panel. Aquí puedes gestionar los productos.</p>
            <ListaProductos />
        </div>
    );
};