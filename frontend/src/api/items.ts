import axios from "axios";

const API_URL = "http://localhost:8080";
axios.defaults.baseURL = API_URL;

// Models
export interface Item {
    id: number;
    name: string;
    priceGBP: number;
    variations: ItemVariation[];
}

interface ItemVariation {
    id: number;
    name: string;
    previewColor: string;
    imageURL: string;
    sizes: ItemVariationSize[];
}

interface ItemVariationSize {
    size: string; // "XS", "S", "M", "L", "XL", "2XL"
    stock: number;
}
