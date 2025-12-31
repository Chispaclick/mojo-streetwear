import { Routes, Route, Navigate } from "react-router-dom";
import { AddProductPage } from "./pages/AddProductPage";

import { useAuth } from "../context/AuthContext";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { DashboardPage } from "./pages/DaschboardPage";
import { EditProductPage } from "./pages/EditProductPage";

export const AdminRouter = () => {
    const { user } = useAuth();

    return (
        <Routes>
            <Route
                path="add-product"
                element={
                    <ProtectedRoute user={user} requiredRole="admin">
                        <AddProductPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="dashboard"
                element={
                    <ProtectedRoute user={user} requiredRole="admin">
                        <DashboardPage />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<Navigate to="dashboard" replace />} />
            <Route
                path="edit-product/:id"
                element={
                    <ProtectedRoute user={user} requiredRole="admin">
                        <EditProductPage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};