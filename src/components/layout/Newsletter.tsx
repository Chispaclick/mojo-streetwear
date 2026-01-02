import { useState } from "react";

export const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`¡Gracias por suscribirte con ${email}!`);
        setEmail("");
    };

    return (
        <section className="bg-stone-300 text-black py-20">
            <div className="max-w-5xl mx-auto px-6">

                {/* TEXTO */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                        Únete al club MOJO
                    </h2>
                    <p className="mt-3 text-black max-w-xl mx-auto ">
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
                                border-b text-black/40 
                                py-3 
                                px-1 
                                text-black 
                                placeholder:text-black/50 
                                focus:outline-none 
                                focus:border-black 
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
            </div>
        </section>
    );
};
