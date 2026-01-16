import type { CustomTShirt } from "../types/customTShirt";


export const BASE_PRICE = 29.9;

export const calculateTShirtPrice = (config: CustomTShirt) => {
    let price = BASE_PRICE;

    // Bordado
    if (config.customization === "embroidery") {
        if (config.embroideryPosition === "chest-small") price += 8;
        if (config.embroideryPosition === "chest-large") price += 12;
        if (config.embroideryPosition === "back") price += 15;
    }

    // Estampados
    if (config.customization === "vinyl") {
        price += 6;
        if (config.hasImage) price += 5;
    }

    if (config.customization === "dtf") {
        price += 10;
    }

    // Texto
    if (config.hasText) {
        price += 5;
    }

    // Extras
    if (config.extras.innerLabel) price += 3;
    if (config.extras.premiumPackaging) price += 4;

    return price;
};