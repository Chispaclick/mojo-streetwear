import { useAuth } from "../../context/AuthContext";



export const DebugAuth = () => {
    const { user, loading } = useAuth();

    if (loading) return <p>Cargando auth...</p>;

    return (
        <div className="p-4 bg-gray-100 text-sm">
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    );
};