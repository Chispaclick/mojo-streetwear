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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, form.email, form.password);
            navigate("/");
        } catch (error) {
            alert("Error al iniciar sesión");
        }
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-[url('/streetwear.jpg')] bg-cover bg-center h-screen w-full">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md border p-8 rounded-lg bg-white"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Iniciar sesión
                </h1>

                <div className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border px-4 py-2"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full border px-4 py-2"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800"
                >
                    Entrar
                </button>

                <p className="text-sm text-center mt-4">
                    ¿No tienes cuenta?{" "}
                    <Link to="/registro" className="underline">
                        Regístrate
                    </Link>
                </p>
            </form>
        </div>
    );
};

