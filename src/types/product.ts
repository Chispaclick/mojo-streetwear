export type Gender = "Hombre" | "Mujer";

export interface Product {
    id?: string;
    name: string;
    category: Gender;
    price: number;
    description?: string;
    imageUrl?: string;
    stock?: number;
    active?: boolean;
}