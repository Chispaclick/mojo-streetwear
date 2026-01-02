import { Routes, Route, Navigate } from "react-router-dom";

import { ProductsListPage } from "./pages/ProductsListPage";
import { AddProductPage } from "./pages/AddProductPage";
import { EditProductPage } from "./pages/EditProductPage";
import { DashboardPage } from "./pages/DaschboardPage";
import { OrdersListPage } from "./pages/OrdensListPage";

import { ProtectedRoute } from "../components/ProtectedRoute";
import { AdminLayout } from "./components/AdminLayout";


export const AdminRouter = () => {
    return (
        <Routes>
            {/* Todas las rutas /admin usan ESTE layout */}
            <Route
                element={
                    <ProtectedRoute requiredRole="admin">
                        <AdminLayout />
                    </ProtectedRoute>
                }
            ></Route>


            {/* /admin → /admin/dashboard */}
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
                path="products"
                element={
                    <ProtectedRoute requiredRole="admin">
                        <ProductsListPage />
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

            <Route
                path="orders"
                element={
                    <ProtectedRoute requiredRole="admin">
                        <OrdersListPage />
                    </ProtectedRoute>
                }
            />

            {/* fallback */}
            <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
    );
};