import { useState } from "react";

export const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí podrías añadir la lógica para enviar el email a tu API o Firebase
        alert(`¡Gracias por suscribirte con ${email}!`);
        setEmail("");
    };

    return (
        <section className="bg-red-600 text-white py-12">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-2xl font-bold mb-4">
                    Únete a nuestro club y recibe las últimas novedades
                </h2>
                <p className="mb-6 text-lg">
                    Suscríbete gratis y no te pierdas nuestras promociones exclusivas.
                </p>
                <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <input
                        type="email"
                        placeholder="Introduce tu email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        required
                        className="p-3 rounded text-black flex-1 min-w-[250px]"
                    />
                    <button
                        type="submit"
                        className="bg-white text-red-600 font-bold px-6 py-3 rounded hover:bg-gray-200 transition"
                    >
                        Suscríbete
                    </button>
                </form>
            </div>
        </section>
    );
}