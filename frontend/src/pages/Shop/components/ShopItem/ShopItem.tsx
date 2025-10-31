import { useState } from "react";
import { type Item } from "@/api";
import ShopItemImage from "./ShopItemImage";
import ShopItemName from "./ShopItemName";
import ShopItemPrice from "./ShopItemPrice";
import ShopItemVariation from "./ShopItemVariation";
import LightClickableText from "@/components/Text/LightClickableText";
import { useBasket } from "@/context/BasketContext";
import Icon from "@/components/Icon/Icon";

interface ShopItemProps {
    item: Item;
    setCurrentPreviewItem: (item: Item) => void;
    setIsPreviewPopupOpen: (isOpen: boolean) => void;
}

const ShopItem: React.FC<ShopItemProps> = ({
    item,
    setCurrentPreviewItem,
    setIsPreviewPopupOpen,
}) => {
    // state to manage current selected color variation of item, using variation ID
    const [selectedVariation, setSelectedVariation] = useState<string>("0");

    const { basket } = useBasket();

    // function to check if current item, variation and size exists in basket
    const checkItemInBasket = () => {
        return basket.some(
            (i) => i.itemID === item.id && i.variationID === selectedVariation
        );
    };

    return (
        <div className="group flex flex-col gap-2 rounded-md transition-all duration-300 sm:hover:-translate-y-2 sm:hover:shadow-2xl">
            <ShopItemImage
                imageURL={
                    item.variations.find((v) => v.id === selectedVariation)
                        ?.imageURL || item.variations[0].imageURL
                }
                itemID={item.id}
                variationID={selectedVariation}
                openItemInPreview={(e) => {
                    e.preventDefault(); // prevent navigating to item page
                    setCurrentPreviewItem(item);
                    setIsPreviewPopupOpen(true);
                }}
            />
            <span className="flex justify-between px-3 py-4 pt-0">
                <div
                    className={`flex flex-col gap-2 ${
                        checkItemInBasket() && "w-full"
                    }`}
                >
                    <span className="flex h-max w-full justify-between">
                        {/* Item Variation Preview Colors */}
                        <div className="flex items-center gap-2">
                            {item.variations.slice(0, 4).map((variation) => (
                                <ShopItemVariation
                                    key={variation.id}
                                    variation={variation}
                                    selected={
                                        selectedVariation === variation.id
                                    }
                                    setSelected={setSelectedVariation}
                                />
                            ))}
                            {/* Label for additional variations -> "+2" */}
                            {item.variations.length > 4 && (
                                <LightClickableText
                                    text={`+ ${item.variations.length - 4}`}
                                    onClick={() => {
                                        setCurrentPreviewItem(item);
                                        setIsPreviewPopupOpen(true);
                                    }}
                                />
                            )}
                        </div>
                        {/* In basket text */}
                        {checkItemInBasket() && (
                            <span className="text-light-text flex h-max w-max items-center gap-1 text-sm">
                                <p className="font-primary w-max">In Basket</p>
                                <Icon
                                    icon="shopping_basket"
                                    className="text-light-text text-xs"
                                />
                            </span>
                        )}
                    </span>
                    <div className="flex flex-col gap-1">
                        <ShopItemName name={item.name} />
                        <span className="flex gap-1.5">
                            <ShopItemPrice
                                price={item.priceGBP}
                                className={
                                    item.discountPriceGBP ? "line-through" : ""
                                }
                            />
                            {item.discountPriceGBP && (
                                <ShopItemPrice
                                    price={item.discountPriceGBP}
                                    className="text-discount-text!"
                                />
                            )}
                        </span>
                    </div>
                </div>
            </span>
        </div>
    );
};

export default ShopItem;
