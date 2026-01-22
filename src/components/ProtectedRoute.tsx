import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

interface Props {
    children: JSX.Element;
    requiredRole?: "admin" | "user";
}

export const ProtectedRoute = ({ children, requiredRole }: Props) => {
    const { user, loading } = useAuth();

    if (loading) return <p className="p-6">Cargando...</p>;

    if (!user) return <Navigate to="/login" replace />;

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/" replace />;
    }

    return children;
};
