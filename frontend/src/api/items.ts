import axios from "axios";

const API_URL = "http://localhost:8080";
axios.defaults.baseURL = API_URL;

// Models
export interface Item {
    id: string;
    name: string;
    gender: string; // "M" / "W"
    categories: string[];
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

export const eligibleSizes = ["XS", "S", "M", "L", "XL", "2XL"];
export const eligibleGenders: string[] = ["mens", "womens"];
export const eligibleCategories: string[] = [
    "new",
    "offers",
    "tops",
    "bottoms",
    "hoodies",
    "sweaters",
];

// API Calls
export const fetchItems = async (
    gender?: string,
    category?: string
): Promise<Item[]> => {
    try {
        const resp = await axios.get<Item[]>("/items", {
            params: { gender: gender ?? "", category: category ?? "" },
        });
        return resp.data;
    } catch (err) {
        console.error("Error fetching items: ", err);
        return [];
    }
};

export const fetchItemById = async (id: string): Promise<Item | null> => {
    try {
        const resp = await axios.get<Item>(`/items/${id}`);
        return resp.data;
    } catch (err) {
        console.error(`Error fetching item with id ${id}: `, err);
        return null;
    }
};
