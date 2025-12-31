import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

interface Props {
    children: JSX.Element;
    requiredRole?: string;
}

export const ProtectedRoute = ({ children, requiredRole }: Props) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Cargando...</p>;

    if (!user) return <Navigate to="/login" replace />;

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/" replace />;
    }

    return children;
};