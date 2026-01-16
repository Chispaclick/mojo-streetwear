
export type SubMenuItem = {
    label: string;
    to: string;
};

export type MainMenuKey = "hombre" | "mujer";

export const SUB_MENUS: Record<MainMenuKey, SubMenuItem[]> = {
    hombre: [
        { label: "Sudaderas", to: "/hoodieMan" },
        { label: "Camisetas", to: "/tshirtsMan" },
        { label: "Pantalones", to: "/hombre/pantalones" },
        { label: "Accesorios", to: "/hombre/accesorios" },
    ],
    mujer: [
        { label: "Sudaderas", to: "/mujer/sudaderas" },
        { label: "Camisetas", to: "/mujer/camisetas" },
        { label: "Vestidos", to: "/mujer/vestidos" },
        { label: "Accesorios", to: "/mujer/accesorios" },
    ],
};