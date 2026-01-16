export type TShirtColor =
    | "black"
    | "white"
    | "gray"
    | "pink"
    | "olive";

export type TShirtSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type CustomizationType =
    | "none"
    | "embroidery"
    | "vinyl"
    | "dtf";

export type CustomTShirt = {
    color: TShirtColor;
    size: TShirtSize;

    customization: CustomizationType;

    embroideryPosition?: "chest-small" | "chest-large" | "back";

    hasText: boolean;
    text?: string;

    hasImage: boolean;
    imageFile?: File;

    extras: {
        innerLabel: boolean;
        premiumPackaging: boolean;
    };
};