import { collection, getDocs, doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export interface Product {
    id?: string;
    nombre: string;
    categoria: "Hombre" | "Mujer";
    precio: number;
    descripcion?: string;
    imagenUrl?: string; // nueva
    createdAt?: Timestamp;
}

export interface OrderItem {
    productId: string;
    nombre: string;
    cantidad: number;
    precio: number;
}

export interface Order {
    id?: string;
    userId: string;
    items: OrderItem[];
    total: number;
    status: "pendiente" | "enviado" | "entregado";
    createdAt?: Timestamp;
}

const ordersRef = collection(db, "orders");

// 📄 Obtener todos los pedidos
export const getOrders = async (): Promise<Order[]> => {
    const snapshot = await getDocs(ordersRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Order) }));
};

// ✏️ Actualizar estado de pedido
export const updateOrderStatus = async (id: string, status: Order["status"]) => {
    const ref = doc(db, "orders", id);
    await updateDoc(ref, { status });
};