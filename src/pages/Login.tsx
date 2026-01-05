import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

interface LoginForm {
    email: string;
    password: string;
}

export const Login = () => {
    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, form.email, form.password);
            navigate("/");
        } catch (error) {
            alert("Error al iniciar sesión");
            console.error(error); // Muy útil para debug
        }
    };


    return (
        <div className="elative
                flex min-h-screen w-full items-center justify-center
                overflow-hidden
                bg-[url('/street-wear-movil.jpeg')]
                bg-cover bg-center
                sm:bg-[url('/hero.jpg')]">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-8"
            >
                <h1 className="text-2xl font-bold mb-6 text-white text-center">
                    Iniciar sesión
                </h1>

                <div className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-b px-4 py-2 border-white/50 text-white outline-0"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full border border-white/50 text-white px-4 py-2 outline-0"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800"
                >
                    Entrar
                </button>

                <p className="text-white text-sm text-center mt-4">
                    ¿No tienes cuenta?{" "}
                    <Link to="/registro" className="underline">
                        Regístrate
                    </Link>
                </p>
            </form>
        </div>
    );
};

