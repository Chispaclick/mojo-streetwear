import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/Home";
import { News } from "../pages/News";
import { Man } from "../pages/Man";
import { Woman } from "../pages/Woman";
import { HoodieMan } from "../pages/HoodieMan";
import { TshirtsMan } from "../pages/TshirtsMan";
import { TshirtsWoman } from "../pages/TshirtsWoman";
import { Personalization } from "../pages/Personalization";
import { Mojo } from "../pages/Mojo";
import { Contants } from "../pages/Contants";
import { ProductPage } from "../pages/ProductPage";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { TermsAndConditions } from "../pages/TermsAndConditions";
import { Privacy } from "../pages/Privacy";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Newsletter } from "../pages/Newsletter";
import Footer from "../pages/Footer";

/* ADMIN */
import { AdminLayout } from "../admin/components/AdminLayout";
import { DashboardPage } from "../admin/pages/DashboardPage";
import { ProductsListPage } from "../admin/pages/ProductsListPage";
import { AddProductPage } from "../admin/pages/AddProductPage";
import { EditProductPage } from "../admin/pages/EditProductPage";
import { OrdersListPage } from "../admin/pages/OrdensListPage";

const RouterApp = () => {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Routes>

                    {/* PUBLIC */}
                    <Route path="/" element={<Layout showHero><Home /></Layout>} />
                    <Route path="/novedades" element={<Layout><News /></Layout>} />
                    <Route path="/hombre" element={<Layout><Man /></Layout>} />
                    <Route path="/hoodieMan" element={<Layout><HoodieMan /></Layout>} />
                    <Route path="/tshirtsMan" element={<Layout><TshirtsMan /></Layout>} />
                    <Route path="/mujer" element={<Layout><Woman /></Layout>} />
                    <Route path="/tshirtsWoman" element={<Layout><TshirtsWoman /></Layout>} />
                    <Route path="/personaliza" element={<Layout><Personalization /></Layout>} />
                    <Route path="/mojo" element={<Layout><Mojo /></Layout>} />
                    <Route path="/contacto" element={<Layout><Contants /></Layout>} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/carrito" element={<Layout><Cart /></Layout>} />

                    <Route
                        path="/checkout"
                        element={
                            <ProtectedRoute>
                                <Layout>
                                    <Checkout />
                                </Layout>
                            </ProtectedRoute>
                        }
                    />

                    <Route path="/login" element={<Layout><Login /></Layout>} />
                    <Route path="/registro" element={<Layout><Register /></Layout>} />
                    <Route path="/terminos-y-condiciones" element={<Layout><TermsAndConditions /></Layout>} />
                    <Route path="/privacidad" element={<Layout><Privacy /></Layout>} />

                    {/* ADMIN */}
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <AdminLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<DashboardPage />} />
                        <Route path="products" element={<ProductsListPage />} />
                        <Route path="add-product" element={<AddProductPage />} />
                        <Route path="edit-product/:id" element={<EditProductPage />} />
                        <Route path="orders" element={<OrdersListPage />} />
                    </Route>

                </Routes>

                <Newsletter />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default RouterApp;
