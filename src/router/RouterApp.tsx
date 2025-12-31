import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
//import { Shop } from "../pages/Shop";
import { Product } from "../pages/Product";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Footer from "../components/layout/Footer";
//import { Navbar } from "../components/layout/Navbar";
//import { Hero } from "../components/layout/Hero";
import { News } from "../pages/News";
import { Man } from "../pages/Man";
import { Woman } from "../pages/Woman";
import { Newsletter } from "../components/layout/Newsletter";
import { Layout } from "../components/layout/Layout";
import { AdminRouter } from "../admin/AdminRouter";
//import { DebugAuth } from "../admin/components/DebugAuth";


const RouterApp = () => {
    return (
        <BrowserRouter>
            {/*<DebugAuth />*/}
            <div className="flex flex-col min-h-screen">
                <Routes>
                    {/* Páginas con Hero */}
                    <Route
                        path="/"
                        element={
                            <Layout showHero={true}>
                                <Home />
                            </Layout>
                        }
                    />
                    <Route
                        path="/admin/*"
                        element={
                            <AdminRouter />
                        }
                    />

                    {/* Páginas sin Hero */}
                    <Route
                        path="/novedades"
                        element={
                            <Layout showHero={false}>
                                <News />
                            </Layout>
                        }
                    />
                    <Route
                        path="/hombre"
                        element={
                            <Layout showHero={false}>
                                <Man />
                            </Layout>
                        }
                    />
                    <Route
                        path="/mujer"
                        element={
                            <Layout showHero={false}>
                                <Woman />
                            </Layout>
                        }
                    />
                    <Route
                        path="/producto/:id"
                        element={
                            <Layout showHero={false}>
                                <Product />
                            </Layout>
                        }
                    />
                    <Route
                        path="/carrito"
                        element={
                            <Layout showHero={false}>
                                <Cart />
                            </Layout>
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <Layout showHero={false}>
                                <ProtectedRoute>
                                    <Checkout />
                                </ProtectedRoute>
                            </Layout>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Layout showHero={false}>
                                <Login />
                            </Layout>
                        }
                    />
                    <Route
                        path="/registro"
                        element={
                            <Layout showHero={false}>
                                <Register />
                            </Layout>
                        }
                    />
                </Routes>

                <Newsletter />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default RouterApp;