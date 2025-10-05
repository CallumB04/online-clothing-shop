import { useState } from "react";
import type { Item } from "../../../../api";
import ShopItemImage from "./ShopItemImage";
import ShopItemName from "./ShopItemName";
import ShopItemPrice from "./ShopItemPrice";
import ShopItemVariation from "./ShopItemVariation";
import LightClickableText from "../../../../components/Text/LightClickableText";
import UIButton from "../../../../components/Button/UIButton";
import { useBasket } from "../../../../context/BasketContext";

interface ShopItemProps {
    item: Item;
}

const ShopItem: React.FC<ShopItemProps> = ({ item }) => {
    // state to manage current selected color variation of clothing item, using variation ID
    const [selectedVariation, setSelectedVariation] = useState<string>("0");

    const { basket, addBasketItem } = useBasket();

    return (
        <div className="group flex flex-col gap-2 rounded-md transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <ShopItemImage
                imageURL={
                    item.variations.find((v) => v.id === selectedVariation)
                        ?.imageURL || item.variations[0].imageURL
                }
            />
            <span className="flex justify-between px-3 py-4 pt-0">
                <div className="flex flex-col gap-1">
                    {/* Item Variation Preview Colors */}
                    <div className="flex items-center gap-2">
                        {item.variations.slice(0, 4).map((variation) => (
                            <ShopItemVariation
                                variation={variation}
                                selected={selectedVariation === variation.id}
                                setSelected={setSelectedVariation}
                            />
                        ))}
                        {/* Label for additional variations -> "+2" */}
                        {item.variations.length > 4 && (
                            <LightClickableText
                                text={`+ ${item.variations.length - 4}`}
                            />
                        )}
                    </div>
                    <ShopItemName name={item.name} />
                    <ShopItemPrice price={item.priceGBP} />
                </div>
                {/* Add to basket button */}
                {!basket.find((i) => i.itemID === item.id) && (
                    <UIButton className="text-sm">Add to Basket</UIButton>
                )}
            </span>
        </div>
    );
};

export default ShopItem;
