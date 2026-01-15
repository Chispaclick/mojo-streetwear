import { useState } from "react";

export const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsModalOpen(true);
        setEmail("");
    };

    return (
        <section className="bg-stone-300 text-white py-20 bg-[url('/newsletter.jpg')]">
            <div className="max-w-5xl mx-auto px-6">

                {/* TEXTO */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        Únete al club MSW
                    </h2>
                    <p className="mt-3 text-white max-w-xl mx-auto ">
                        Accede antes que nadie a nuevos drops, ediciones limitadas y contenido exclusivo.
                    </p>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* INPUT CON ESTILO */}
                    <div className="w-full sm:w-[420px]">
                        <input
                            type="email"
                            placeholder="Introduce tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="
                                w-full 
                                bg-transparent 
                                border-b text-white/80
                                py-3 
                                px-1 
                                text-white
                                placeholder:text-white/80 
                                focus:outline-none 
                                focus:border-white 
                                transition
                            "
                        />
                    </div>

                    {/* BOTÓN */}
                    <button
                        type="submit"
                        className="
                            bg-white 
                            text-black
                            px-8 
                            py-3 
                            font-semibold 
                            tracking-wide 
                            hover:bg-gray-200 
                            transition
                        "
                    >
                        SUSCRIBIRME
                    </button>
                </form>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
                        <div className="bg-white text-black max-w-md w-full p-8 text-center relative">
                            <h3 className="text-2xl font-bold mb-4">
                                ¡Bienvenido al club MSW!
                            </h3>

                            <p className="text-gray-600 mb-6">
                                Gracias por suscribirte a MOJO Street Wear.
                                Pronto recibirás nuestros drops y contenido exclusivo.
                            </p>

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition"
                            >
                                CERRAR
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
