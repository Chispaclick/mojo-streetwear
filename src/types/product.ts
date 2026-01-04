export interface Product {
    id?: string;
    name: string;             // título del producto
    description?: string;
    price: number;
    category?: "Hombre" | "Mujer" | string;
    imageUrl?: string;        // imagen principal
    image?: string;           // opcional si alguna parte usa `image`
    stock?: number;
    active?: boolean;
    sizes?: string[];
    colors?: string[];
}