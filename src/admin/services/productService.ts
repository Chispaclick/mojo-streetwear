import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import type { Product } from "./orders.service";


const productsRef = collection(db, "products");

// 🔁 NORMALIZADOR
const normalizeProduct = (raw: any): Product => ({
    id: raw.id,
    name: raw.name ?? raw.nombre,
    category: raw.category ?? raw.categoria,
    price: raw.price ?? raw.precio,
    description: raw.description ?? raw.descripcion,
    imageUrl: raw.imageUrl ?? raw.image,
    stock: raw.stock,
    active: raw.active,
});

// ➕ Crear
export const addProduct = async (product: Product) => {
    await addDoc(productsRef, {
        name: product.name,
        category: product.category,
        precio: product.price, // Firestore sigue en español si quieres
        descripcion: product.description,
        image: product.imageUrl,
        stock: product.stock,
        active: product.active,
    });
};

// 📄 Obtener todos
export const getProducts = async (): Promise<Product[]> => {
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map((doc) =>
        normalizeProduct({ id: doc.id, ...doc.data() })
    );
};

// 📄 Obtener uno
export const getProductById = async (id: string): Promise<Product> => {
    const ref = doc(db, "products", id);
    const snap = await getDoc(ref);

    if (!snap.exists()) throw new Error("Producto no encontrado");

    return normalizeProduct({ id: snap.id, ...snap.data() });
};

// ✏️ Actualizar
export const updateProduct = async (
    id: string,
    data: Partial<Product>
) => {
    const ref = doc(db, "products", id);

    await updateDoc(ref, {
        ...(data.name && { name: data.name }),
        ...(data.category && { categoria: data.category }),
        ...(data.price !== undefined && { precio: data.price }),
        ...(data.description && { descripcion: data.description }),
        ...(data.imageUrl && { image: data.imageUrl }),
        ...(data.stock !== undefined && { stock: data.stock }),
        ...(data.active !== undefined && { active: data.active }),
    });
};

// ❌ Eliminar
export const deleteProduct = async (id: string) => {
    await deleteDoc(doc(db, "products", id));
};