import { Routes, Route, Navigate } from "react-router-dom";
import { AddProductPage } from "./pages/AddProductPage";
import { EditProductPage } from "./pages/EditProductPage";

import { ProtectedRoute } from "../components/ProtectedRoute";
import { DashboardPage } from "./pages/DaschboardPage";

export const AdminRouter = () => {
    return (
        <Routes>
            {/* Redirect de /admin → /admin/dashboard */}
            <Route path="" element={<Navigate to="dashboard" replace />} />

            <Route
                path="dashboard"
                element={
                    <ProtectedRoute requiredRole="admin">
                        <DashboardPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="add-product"
                element={
                    <ProtectedRoute requiredRole="admin">
                        <AddProductPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="edit-product/:id"
                element={
                    <ProtectedRoute requiredRole="admin">
                        <EditProductPage />
                    </ProtectedRoute>
                }
            />

            {/* Catch all */}
            <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
    );
};