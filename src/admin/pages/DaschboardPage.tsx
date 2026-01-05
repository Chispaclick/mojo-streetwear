import { Navbar } from "../../components/layout/Navbar";
import { AdminSidebar } from "../components/AdminSidebar";
//import { AdminLayout } from "../components/AdminLayout";

export const DashboardPage = () => {
    return (
        <>
            <Navbar />
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden 
                       bg-[url('/street-wear-movil.jpeg')]
                bg-cover bg-center
                sm:bg-[url('/hero.jpg')]">

                <div className="flex w-full justify-end">
                    <AdminSidebar />
                </div>
            </div>
        </>
    );
};