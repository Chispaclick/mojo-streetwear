
import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { FeaturedProducts } from "./FeaturedProducts";


interface LayoutProps {
    children: ReactNode;
    showHero?: boolean; // opcional: decidir si mostrar Hero
}

export const Layout = ({ children, showHero = true }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {showHero && <Hero />}
            <main className="flex-1">{children}</main>
            <FeaturedProducts />
        </div>
    );
};