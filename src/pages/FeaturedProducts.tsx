import { Link } from "react-router-dom";
import { ProductHoodieCard } from "../components/ProductHoodieCard";


export const FeaturedProducts = () => {


    const productsHoodie = [
        {
            id: 1,
            title: "Sudadera Negra Mojo Flames",
            price: 70,
            image: "/../images/hoodies-man/hoodies-man-1.jpg",
        },
        {
            id: 2,
            title: "Sudadera Gris Mojo Logo",
            price: 70,
            image: "/../images/hoodies-man/hoodies-man-2.jpg",
        },
        {
            id: 3,
            title: "Sudadera Beige Mojo Worldwide",
            price: 70,
            image: "/../images/hoodies-man/hoodies-man-3.jpg",
        },
        {
            id: 4,
            title: "Sudadera Negra Mojo Minimal",
            price: 70,
            image: "/../images/hoodies-man/hoodies-man-4.jpg",
        }
    ];


    const productsTshirts = [
        {
            id: 1,
            title: "Sudadera Negra Mojo Flames",
            price: 70,
            image: "/../images/t-shirts-man/hombre en camiseta-1.jpg",
        },
        {
            id: 2,
            title: "Sudadera Gris Mojo Logo",
            price: 70,
            image: "/../images/t-shirts-man/hombre en camiseta-2.jpg",
        },
        {
            id: 3,
            title: "Sudadera Beige Mojo Worldwide",
            price: 70,
            image: "/../images/t-shirts-man/hombre en camiseta-3.jpg",
        },
        {
            id: 4,
            title: "Sudadera Negra Mojo Minimal",
            price: 70,
            image: "/../images/t-shirts-man/hombre en camiseta-4.jpg",
        }
    ];


    return (
        <section className="flex-coll w-full bg-white py-24">
            <div className="mb-5 text-start">
                <h2 className="text-section ml-55">
                    MÁS VENDIDOS
                </h2>
            </div>
            <div className="flex w-full gap-3 items-center justify-around px-55">
                <div className="flex-col">
                    <div className="flex w-full justify-between">
                        <p className="text-2xl mb-4">Sudaderas</p>
                        <Link to="/hoodieMan" className="cursor-pointer font-bold">Ver todo</Link>
                    </div>
                    <div className="flex gap-5">

                        {productsHoodie.map((product) => (
                            <ProductHoodieCard
                                key={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex w-full gap-3 items-center justify-around px-55 mt-8">
                <div className="flex-col">
                    <div className="flex w-full justify-between">
                        <p className="text-2xl mb-4">Camisetas</p>
                        <Link to="/tshirtsMan" className="cursor-pointer font-bold">Ver todo</Link>
                    </div>
                    <div className="flex gap-5">

                        {productsTshirts.map((product) => (
                            <ProductHoodieCard
                                key={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
