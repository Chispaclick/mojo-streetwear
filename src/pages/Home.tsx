

import { FeaturedProducts } from "./FeaturedProducts";
import { Personalization } from "./Personalization";
import { WhyMojo } from "./WhyMojo";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import { BrandStory } from "./BrandStory";
import LimitedEditionSection from "./LimitedEditionSection";

export const Home = () => {
    const cart = useSelector((state: RootState) => state.cart.items);
    console.log(cart);
    return (
        <>
            <BrandStory />
            <FeaturedProducts />
            <LimitedEditionSection />
            <WhyMojo />
            <Personalization />
        </>
    )
}
