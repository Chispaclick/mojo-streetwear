
import type { ReactNode } from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
};

