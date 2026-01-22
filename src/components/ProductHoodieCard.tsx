type ProductCardProps = {
    image: string;
    title: string;
    price: number;
};

export const ProductHoodieCard = ({ image, title, price }: ProductCardProps) => {
    return (
        <div className="flex-col w-[350px] group bg-white overflow-hidden shadow-sm hover:shadow-lg transition hover:outline-[0.5px] outline-black/50">
            <div className="flex">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-300"
                />
            </div>

            <div className="p-4">
                <div className="flex justify-between items-center">

                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                        {title}
                    </h3>
                    <p className="text-black font-medium">
                        {price.toFixed(2)} €
                    </p>

                </div>
                <button className="mt-4 w-full border border-black py-2 text-sm font-semibold hover:bg-black hover:text-white transition">
                    Ver
                </button>
            </div>
        </div>
    );
};

