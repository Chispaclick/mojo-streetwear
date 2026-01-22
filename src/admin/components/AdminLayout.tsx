import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import { Navbar } from "../../components/layout/Navbar";

export const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex">

                <main className="flex-1">
                    <Outlet />
                </main>
                <AdminSidebar />
            </div>
        </div>
    );
};
