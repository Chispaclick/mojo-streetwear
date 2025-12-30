

import { RootState } from "../store";
import { useSelector } from "react-redux";

export const Home = () => {
    const cart = useSelector((state: RootState) => state.cart.items);
    console.log(cart);
    return (
        <>
        </>
    )
}
