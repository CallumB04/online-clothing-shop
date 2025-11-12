import axios from "axios";
import type { Basket } from "./basket";

export interface BasketTotal {
    total: number;
    discountedTotal: number;
}

export const calculateBasketTotal = async (
    basket: Basket,
    discount?: number
): Promise<BasketTotal | undefined> => {
    try {
        const resp = await axios.post<BasketTotal>("/checkout", {
            basket,
            discount,
        });
        return resp.data;
    } catch (err) {
        console.error("Error calculating total: ", err);
        return undefined;
    }
};
