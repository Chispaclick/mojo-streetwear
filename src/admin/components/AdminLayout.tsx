import type { ReactNode } from "react";
//import { AdminSidebar } from "./AdminSidebar";
import { useAuth } from "../../context/AuthContext";

interface Props {
    children: ReactNode;
}

export const AdminLayout = ({ children }: Props) => {
    const { user, loading } = useAuth();

    // Espera a que cargue el usuario
    if (loading) return <p className="p-6">Cargando admin...</p>;

    // Solo admin puede ver el layout
    if (!user || user.role !== "admin") return <p>No tienes permisos.</p>;

    return (
        <div className="flex min-h-screen">

            <main className="flex-1 p-6 bg-gray-100">{children}</main>
        </div>
    );
};