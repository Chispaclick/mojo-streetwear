import type { Product } from "../../types/Product";
import { Link } from "react-router-dom";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <Link to={`/producto/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                />
                <div className="p-4">
                    <h2 className="font-bold text-lg">{product.name}</h2>
                    <p className="text-gray-700 mt-2">${product.price}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;