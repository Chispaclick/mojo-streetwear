import { useEffect, useState } from "react";
import { AdminSidebar } from "../components/AdminSidebar";
import { getOrders, updateOrderStatus, type Order, } from "../services/orders.service";

export const OrdersListPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        setLoading(true);
        const data = await getOrders();
        setOrders(data);
        setLoading(false);
    };

    const handleChangeStatus = async (id?: string, status?: Order["status"]) => {
        if (!id || !status) return;
        await updateOrderStatus(id, status);
        fetchOrders();
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    if (loading) return <p className="p-6">Cargando pedidos...</p>;

    return (
        <div className="flex">
            <AdminSidebar />
            <main className="flex-1 p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Pedidos</h1>
                <table className="w-full bg-white rounded shadow">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3 text-left">ID Pedido</th>
                            <th className="p-3 text-left">Usuario</th>
                            <th className="p-3 text-left">Total</th>
                            <th className="p-3 text-left">Estado</th>
                            <th className="p-3 text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{order.id}</td>
                                <td className="p-3">{order.userId}</td>
                                <td className="p-3">${order.total}</td>
                                <td className="p-3">{order.status}</td>
                                <td className="p-3">
                                    <select
                                        value={order.status}
                                        onChange={e => handleChangeStatus(order.id, e.target.value as Order["status"])}
                                        className="border rounded p-1"
                                    >
                                        <option value="pendiente">Pendiente</option>
                                        <option value="enviado">Enviado</option>
                                        <option value="entregado">Entregado</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};