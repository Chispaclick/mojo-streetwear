import { useState } from "react";

export const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Aquí podrías añadir la lógica para enviar el email a tu API o Firebase
        alert(`¡Gracias por suscribirte con ${email}!`);
        setEmail("");
    };

    return (
        <section className="bg-gray-500 text-white py-12">
            <div className="flex max-w-4xl mx-auto text-center px-4">
                <div className="flex-col">
                    <h2 className="text-2xl font-bold mb-4">
                        Únete a nuestro club y recibe las últimas novedades
                    </h2>
                </div>
                <div className="flex">
                    <form
                        onSubmit={handleSubscribe}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4"
                    >
                        <input
                            type="email"
                            placeholder="Introduce tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="p-3 rounded text-black flex-1 min-w-[250px]"
                        />
                        <button
                            type="submit"
                            className="bg-white text-black font-bold px-6 py-3 rounded hover:bg-gray-200 transition"
                        >
                            Suscríbete
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
