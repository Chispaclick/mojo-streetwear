import { Link } from "react-router-dom";

export const News = () => {
    return (
        <section className="flex-col items-center novedades-header p-6 text-center bg-[url('/wallpaper-news.jpg')] bg-cover bg-center h-screen w-full">
            <h1 className="text-2xl sm:text-2xl font-bold mb-4 text-white leading-snug">
                ¡Lo último ha llegado!
            </h1>
            <p className="text-base text-white max-w-xl mx-auto leading-relaxed">
                Descubre nuestras camisetas recién salidas de la temporada: diseños únicos, colores que marcan tendencia y cortes que se adaptan a tu estilo. Cada prenda es una declaración de personalidad, pensada para quienes no siguen modas… las crean.
            </p>
            <div className="flex justify-center gap-4 mt-6">
                <Link
                    to="/hombre"
                    className="bg-black w-50 text-white px-6 py-3 rounded hover:bg-gray-800 transition text-base font-medium"
                >
                    Hombre
                </Link>
                <Link
                    to="/mujer"
                    className="bg-black w-50 text-white px-6 py-3 rounded hover:bg-gray-800 transition text-base font-medium"
                >
                    Mujer
                </Link>
            </div>
        </section>
    )
}