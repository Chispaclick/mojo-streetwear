import { Navbar } from "../../components/layout/Navbar";
//import { AdminLayout } from "../components/AdminLayout";

export const DashboardPage = () => {
    return (
        <>
            <Navbar />
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden 
                       bg-[url('/street-wear-movil.jpeg')] sm:bg-[url('/streetwear.jpg')] bg-cover bg-center h-screen w-full">

                <div className="flex-col w-full">
                    <div className="flex justify-center items-center">
                        <h2 className="text-xl font-bold">Panel de Administración</h2>
                        <p className="text-white">Bienvenido al panel. Aquí puedes gestionar los productos.</p>

                    </div>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full">
                        <button className="w-full sm:w-[320px] bg-white text-black p-4 rounded">
                            AGREGAR PRODUCTO
                        </button>
                        <button className="w-full sm:w-[320px] border border-white text-white p-4 rounded">
                            EDITAR PRODUCTO
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};