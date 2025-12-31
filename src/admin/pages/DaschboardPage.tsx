import { Dashboard } from "../components/Dashboard";
import { DebugAuth } from "../components/DebugAuth";

export const DashboardPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <Dashboard />
            <DebugAuth />
        </div>
    );
};