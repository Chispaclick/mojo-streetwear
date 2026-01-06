import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { AdminSidebar } from "./AdminSidebar";
import { Navbar } from "../../components/layout/Navbar";
import { useState } from "react";

export const AdminLayout = () => {
    const { user, loading } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);


    if (loading) return <p className="p-6">Cargando admin...</p>;
    if (!user || user.role !== "admin") return <p className="p-6">No tienes permisos.</p>;

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex flex-1 bg-gray-100">
                <AdminSidebar
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};