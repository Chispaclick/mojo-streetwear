export const Mojo = () => {
    return (
        <section className="bg-gray-50 text-black py-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Título principal */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Conoce MOJO
                </h2>

                {/* Historia y fotos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Texto */}
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed">
                            MOJO nació de un sueño: un creador con ideas infinitas, pero sin un foco claro, decidió convertir su pasión en acción.
                            Desde un pequeño cuarto sin experiencia alguna, cada diseño y cada prenda fueron un aprendizaje que lo llevó a entender lo que significa construir una marca de ropa desde cero.
                        </p>
                        <p className="text-base leading-relaxed">
                            Hoy, MOJO representa autenticidad, creatividad y libertad.
                            Cada camiseta cuenta una historia, cada edición limitada refleja cuidado y dedicación. Lo que comenzó como un sueño en un cuarto pequeño, se convirtió en un proyecto que busca inspirar a todos los que se atreven a crear sin miedo.
                        </p>
                        <a
                            href="/coleccion"
                            className="inline-block bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition"
                        >
                            Explora la Colección
                        </a>
                    </div>

                    {/* Fotos */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/studio-1.jpg"
                            alt="Estudio del creador"
                            className="w-full h-64 object-cover rounded shadow-lg"
                        />
                        <img
                            src="/images/studio-2.jpg"
                            alt="Proceso creativo"
                            className="w-full h-64 object-cover rounded shadow-lg"
                        />
                    </div>

                </div>

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
