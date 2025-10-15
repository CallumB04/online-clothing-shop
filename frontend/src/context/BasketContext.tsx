import { createContext, useContext, useState } from "react";
import type { Basket, BasketItem } from "@/api";

type BasketContextType = {
    basket: Basket;
    addBasketItem: (item: BasketItem) => void;
    removeBasketItem: (item: BasketItem) => void;
    clearBasket: () => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error("useBasket must be used within a BasketProvider");
    }

    return context;
};

// function to check if two basket items are the same (item, variation and size)
const checkBasketItemMatch = (a: BasketItem, b: BasketItem): boolean => {
    return (
        a.itemID === b.itemID &&
        a.variationID === b.variationID &&
        a.size === b.size
    );
};

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
    const [basket, setBasket] = useState<Basket>([]);

    const addBasketItem = (item: BasketItem) => {
        setBasket((currentBasket) => {
            // check if that item of that variation and size already exists in basket
            const existsInBasket = currentBasket.find((basketItem) =>
                checkBasketItemMatch(basketItem, item)
            );

            // if item already exists in basket, will increase quantity instead of creating new item
            if (existsInBasket) {
                return currentBasket.map((basketItem) => {
                    return checkBasketItemMatch(basketItem, item)
                        ? {
                              ...basketItem,
                              quantity: basketItem.quantity + item.quantity,
                          }
                        : basketItem;
                });
            }

            // if new item, add to basket
            return [...currentBasket, item];
        });
    };

    const removeBasketItem = (item: BasketItem) => {
        setBasket((currentBasket) => {
            return (
                currentBasket
                    .map((basketItem) => {
                        // decrease basket item quantity by specified amount
                        if (checkBasketItemMatch(basketItem, item)) {
                            return {
                                ...basketItem,
                                quantity: basketItem.quantity - item.quantity,
                            };
                        }
                        return basketItem;
                    })
                    // remove any items with 0 or less quantiy
                    .filter((basketItem) => basketItem.quantity > 0)
            );
        });
    };

    const clearBasket = () => {
        setBasket([]);
    };

    return (
        <BasketContext.Provider
            value={{ basket, addBasketItem, removeBasketItem, clearBasket }}
        >
            {children}
        </BasketContext.Provider>
    );
};
