import { useState } from "react";
import type { Item } from "../../../../api";
import ShopItemImage from "./ShopItemImage";
import ShopItemName from "./ShopItemName";
import ShopItemPrice from "./ShopItemPrice";
import ShopItemVariation from "./ShopItemVariation";
import LightClickableText from "../../../../components/Text/LightClickableText";

interface ShopItemProps {
    item: Item;
}

const ShopItem: React.FC<ShopItemProps> = ({ item }) => {
    // state to manage current selected color variation of clothing item, using variation ID
    const [selectedVariation, setSelectedVariation] = useState<string>("0");

    return (
        <div className="group flex cursor-pointer flex-col gap-2 rounded-md transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <ShopItemImage
                imageURL={
                    item.variations.find((v) => v.id === selectedVariation)
                        ?.imageURL || item.variations[0].imageURL
                }
            />
            <div className="flex flex-col gap-1 px-3 py-4 pt-0">
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
        </div>
    );
};

export default ShopItem;
