import axios from "axios";

const API_URL = "http://localhost:8080";
axios.defaults.baseURL = API_URL;

// Models
export interface Item {
    id: string;
    name: string;
    gender: string; // "M" / "F"
    priceGBP: number;
    variations: ItemVariation[];
}

export interface ItemVariation {
    id: string;
    name: string;
    previewColor: string;
    imageURL: string;
    sizes: ItemVariationSize[];
}

export interface ItemVariationSize {
    size: string; // "XS", "S", "M", "L", "XL", "2XL"
    stock: number;
}

// API Calls
export const fetchItems = async (): Promise<Item[]> => {
    try {
        const resp = await axios.get<Item[]>("/items");
        return resp.data;
    } catch (err) {
        console.error("Error fetching items: ", err);
        return [];
    }
};

export const fetchItemById = async (id: number): Promise<Item | null> => {
    try {
        const resp = await axios.get<Item>(`/items/${id}`);
        return resp.data;
    } catch (err) {
        console.error(`Error fetching item with id ${id}: `, err);
        return null;
    }
};
