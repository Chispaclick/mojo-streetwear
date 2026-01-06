
import type { ReactNode } from "react";
import { Hero } from "./Hero";
//import { FeaturedProducts } from "./FeaturedProducts";
//import { BrandStory } from "./BrandStory";
//import { WhyMojo } from "./WhyMojo";
//import { Personalization } from "./Personalization";


interface LayoutProps {
    children: ReactNode;
    showHero?: boolean; // opcional: decidir si mostrar Hero
}

export const Layout = ({ children, showHero = true }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            {showHero && <Hero />}
            <main className="flex-1">{children}</main>
        </div>
    );
};