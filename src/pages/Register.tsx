import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, validatePassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { validateEmail, validateName, validatePasswordd } from "../utils/valiadation";

interface RegisterForm {
    name: string;
    email: string;
    password: string;
}

export const Register = () => {
    const [form, setForm] = useState<RegisterForm>({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Estado para errores
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            name: validateName(form.name) ? "" : "El nombre es obligatorio",
            email: validateEmail(form.email) ? "" : "Email inválido",
            password: validatePasswordd(form.password)
                ? ""
                : "La contraseña debe tener al menos 6 caracteres",
        };

        setErrors(newErrors);

        // Si hay algún error, no continuar
        if (Object.values(newErrors).some((err) => err !== "")) return;

        try {
            await createUserWithEmailAndPassword(auth, form.email, form.password);
            navigate("/");
        } catch (error: any) {
            alert(error.message);
        }
    };
    const navigate = useNavigate();



    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md border p-8 rounded-lg"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Crear cuenta
                </h1>

                <div className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border px-4 py-2"
                        />
                        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border px-4 py-2"
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full border px-4 py-2"
                        />
                        {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={Object.values(errors).some((err) => err !== "")}
                    className="mt-6 w-full bg-black text-white py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800"
                >
                    Registrarse
                </button>

                <p className="text-sm text-center mt-4">
                    ¿Ya tienes cuenta?{" "}
                    <Link to="/login" className="underline">
                        Inicia sesión
                    </Link>
                </p>
            </form>
        </div>
    );
};

