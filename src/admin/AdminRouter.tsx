import { Routes, Route, Navigate } from "react-router-dom";

import { ProductsListPage } from "./pages/ProductsListPage";
import { AddProductPage } from "./pages/AddProductPage";
import { EditProductPage } from "./pages/EditProductPage";
import { useAuth } from "../context/AuthContext";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { DashboardPage } from "./pages/DaschboardPage";
import { OrdersListPage } from "./pages/OrdensListPage";

export const AdminRouter = () => {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="" element={<Navigate to="dashboard" replace />} />
            <Route
                path="dashboard"
                element={
                    <ProtectedRoute user={user} requiredRole="admin">
                        <DashboardPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="products"
                element={
                    <ProtectedRoute user={user} requiredRole="admin">
                        <ProductsListPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="add-product"
                element={
                    <ProtectedRoute user={user} requiredRole="admin">
                        <AddProductPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="edit-product/:id"
                element={
                    <ProtectedRoute user={user} requiredRole="admin">
                        <EditProductPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="*"
                element={
                    <Navigate to="dashboard" replace />
                }
            />
            <Route
                path="orders"
                element={
                    <ProtectedRoute user={user} requiredRole="admin">
                        <OrdersListPage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};