import { Navbar } from "../../components/layout/Navbar";
import { AdminCard } from "../components/AdminCard";
import { AdminSidebar } from "../components/AdminSidebar";
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
                <div className="flex">
                    <AdminSidebar />
                    <main className="flex-1 p-6 bg-gray-100 min-h-screen">
                        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <AdminCard title="Productos" value={120} />
                            <AdminCard title="Pedidos" value={45} />
                            <AdminCard title="Usuarios" value={32} />
                        </div>
                        <p>Bienvenido al panel de administración de la tienda.</p>
                    </main>
                </div>
            </div>
        </>
    );
};