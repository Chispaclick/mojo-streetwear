import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";
import { Product } from "../pages/Product";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { Layout } from "../components/layout/Layout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Footer from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/layout/Hero";
import { News } from "../pages/News";
import { Man } from "../pages/Man";
import { Woman } from "../pages/Woman";






const RouterApp = () => {
    return (
        <>
            <BrowserRouter>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <Hero />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/novedades" element={<News />} />
                            <Route path="/hombre" element={<Man />} />
                            <Route path="/mujer" element={<Woman />} />
                            <Route path="/producto/:id" element={<Product />} />
                            <Route path="/carrito" element={<Cart />} />
                            <Route
                                path="/checkout"
                                element={
                                    <ProtectedRoute>
                                        <Checkout />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="/login" element={<Login />} />
                            <Route path="/registro" element={<Register />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    );
};

export default RouterApp;