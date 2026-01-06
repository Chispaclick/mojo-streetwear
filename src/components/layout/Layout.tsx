import type { ReactNode } from "react";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";


interface LayoutProps {
    children: ReactNode;
    showHero?: boolean; // opcional: decidir si mostrar Hero
}

export const Layout = ({ children, showHero = true }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar visible en todas las páginas públicas */}
            <Navbar />

            {/* Hero opcional */}
            {showHero && <Hero />}

            {/* Contenido de la página */}
            <main className="flex-1">{children}</main>
        </div>
    );
};
