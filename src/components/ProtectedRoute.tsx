import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

interface Props {
    children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Cargando...</p>;

    if (!user) return <Navigate to="/login" replace />;

    return children;
};

