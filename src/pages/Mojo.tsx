import { BrandStory } from "./BrandStory";

export const Mojo = () => {
    return (
        <section className="bg-gray-50 text-black py-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Título principal */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Conoce MOJO
                </h2>

                {/* Historia y fotos */}
                <BrandStory />
                {/* Sección de inspiración */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-4">Nuestra Filosofía</h3>
                    <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Creemos en la moda como una forma de expresión personal. Cada prenda que diseñamos es una invitación a ser auténtico, a destacar y a vivir con estilo propio.
                        La creatividad y la pasión son el motor de MOJO, y queremos compartirlo con todos aquellos que buscan algo más que ropa… buscan identidad.
                    </p>
                </div>
            </div>
        </section>
    );
};
