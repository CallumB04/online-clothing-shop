export type Basket = BasketItem[];

export interface BasketItem {
    itemID: string;
    variationID: string;
    size: string;
    quantity: number;
}
