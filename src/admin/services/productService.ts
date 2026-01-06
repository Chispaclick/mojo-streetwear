import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import { db, storage } from "../../firebase/firebase";
import type { Product } from "../../types/product";

const productsRef = collection(db, "products");

/* =========================
   🔁 Normalizador
========================= */
const normalizeProduct = (raw: any): Product => ({
    id: raw.id,
    name: raw.name ?? raw.nombre,
    category: raw.category ?? raw.categoria,
    price: raw.price ?? raw.precio,
    description: raw.description ?? raw.descripcion,
    imageUrl: raw.imageUrl ?? raw.image,
    stock: raw.stock,
    active: raw.active,
    sizes: raw.sizes,
    colors: raw.colors,
});

/* =========================
   🖼️ Subir imagen a Storage
========================= */
export const uploadProductImage = async (file: File): Promise<string> => {
    const imageRef = ref(
        storage,
        `products/${Date.now()}-${file.name}`
    );

    await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(imageRef);

    return downloadURL;
};

/* =========================
   ➕ Crear producto
========================= */
export const addProduct = async (
    product: Product,
    imageFile?: File
) => {
    let imageUrl = product.imageUrl;

    // 👉 Si hay imagen nueva, se sube
    if (imageFile) {
        imageUrl = await uploadProductImage(imageFile);
    }

    await addDoc(productsRef, {
        name: product.name,
        categoria: product.category,
        precio: product.price,
        descripcion: product.description,
        image: imageUrl,
        stock: product.stock ?? 0,
        active: product.active ?? true,
        sizes: product.sizes ?? [],
        colors: product.colors ?? [],
    });
};

/* =========================
   📄 Obtener todos
========================= */
export const getProducts = async (): Promise<Product[]> => {
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map((docSnap) =>
        normalizeProduct({ id: docSnap.id, ...docSnap.data() })
    );
};

/* =========================
   📄 Obtener uno
========================= */
export const getProductById = async (id: string): Promise<Product> => {
    const refDoc = doc(db, "products", id);
    const snap = await getDoc(refDoc);

    if (!snap.exists()) {
        throw new Error("Producto no encontrado");
    }

    return normalizeProduct({ id: snap.id, ...snap.data() });
};

/* =========================
   ✏️ Actualizar producto
========================= */
export const updateProduct = async (
    id: string,
    data: Partial<Product>,
    imageFile?: File
) => {
    const refDoc = doc(db, "products", id);

    let imageUrl = data.imageUrl;

    if (imageFile) {
        imageUrl = await uploadProductImage(imageFile);
    }

    await updateDoc(refDoc, {
        ...(data.name && { name: data.name }),
        ...(data.category && { categoria: data.category }),
        ...(data.price !== undefined && { precio: data.price }),
        ...(data.description && { descripcion: data.description }),
        ...(imageUrl && { image: imageUrl }),
        ...(data.stock !== undefined && { stock: data.stock }),
        ...(data.active !== undefined && { active: data.active }),
        ...(data.sizes && { sizes: data.sizes }),
        ...(data.colors && { colors: data.colors }),
    });
};

/* =========================
   ❌ Eliminar producto
========================= */
export const deleteProduct = async (id: string) => {
    await deleteDoc(doc(db, "products", id));
};
