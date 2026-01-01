import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
    Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";


export interface Product {
    id?: string;
    name: string;
    category: "Hombre" | "Mujer";
    precio: number;
    description: string;
    image?: string;
    stock?: number;
    active?: boolean;
    createdAt?: Timestamp;
}


// Referencia a la colección products
const productsRef = collection(db, "products");

// ➕ Crear producto
export const addProduct = async (product: Product) => {
    await addDoc(productsRef, {
        ...product,
        createdAt: Timestamp.now(),
    });
};

// 📄 Obtener todos los productos
export const getProducts = async (): Promise<Product[]> => {
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Product),
    }));
};

// 📄 Obtener producto por ID
export const getProductById = async (id: string): Promise<Product> => {
    const ref = doc(db, "products", id);
    const snap = await getDoc(ref);

    if (!snap.exists()) throw new Error("Producto no encontrado");

    return { id: snap.id, ...(snap.data() as Product) };
};

// ✏️ Actualizar producto
export const updateProduct = async (id: string, data: Partial<Product>) => {
    const ref = doc(db, "products", id);
    await updateDoc(ref, data);
};

// ❌ Eliminar producto
export const deleteProduct = async (id: string) => {
    const ref = doc(db, "products", id);
    await deleteDoc(ref);
};
