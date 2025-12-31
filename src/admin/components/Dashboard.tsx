//import { ListaProductos } from "./ListaProductos";

export const Dashboard = () => {
    return (
        <>
            <div className="flex w-full">
                <div className="">
                    <h2 className="text-xl font-bold">Panel de Administración</h2>
                    <p>Bienvenido al panel. Aquí puedes gestionar los productos.</p>

                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full">
                    <button className="w-full sm:w-[320px] bg-white text-black p-4 rounded">
                        Ver Colección
                    </button>
                    <button className="w-full sm:w-[320px] border border-white text-white p-4 rounded">
                        Personalizar
                    </button>
                </div>
            </div>
        </>
    );
};