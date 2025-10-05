import { useEffect, useState } from "react";
import { eligibleSizes, type Item, type ItemVariation } from "../../../../api";
import ShopItemImage from "./ShopItemImage";
import ShopItemName from "./ShopItemName";
import ShopItemPrice from "./ShopItemPrice";
import ShopItemVariation from "./ShopItemVariation";
import LightClickableText from "../../../../components/Text/LightClickableText";
import UIButton from "../../../../components/Button/UIButton";
import { useBasket } from "../../../../context/BasketContext";
import ShopItemSize from "./ShopItemSize";
import Icon from "../../../../components/Icon/Icon";

interface ShopItemProps {
    item: Item;
}

const ShopItem: React.FC<ShopItemProps> = ({ item }) => {
    // state to manage current selected color variation of item, using variation ID
    const [selectedVariation, setSelectedVariation] = useState<string>("0");
    // state to manage current select size of item - "XS", "M", etc
    const [selectedSize, setSelectedSize] = useState<string>(
        item.variations[0].sizes.find((v) => v.stock > 0)?.size || ""
    );

    const { basket, addBasketItem, removeBasketItem } = useBasket();

    // update selectedSize when variation changes, incase new variation doesnt have current selected variation
    useEffect(() => {
        setSelectedSize(
            item.variations
                .find((v) => v.id === selectedVariation)
                ?.sizes.find((v) => v.stock > 0)?.size || ""
        );
    }, [selectedVariation]);

    // function to check if current item, variation and size exists in basket
    const checkItemInBasket = () => {
        return basket.find(
            (i) =>
                i.itemID === item.id &&
                i.variationID === selectedVariation &&
                i.size === selectedSize
        )
            ? true
            : false;
    };

    return (
        <div className="group flex flex-col gap-2 rounded-md transition-all duration-200 sm:hover:scale-105 sm:hover:shadow-lg">
            <ShopItemImage
                imageURL={
                    item.variations.find((v) => v.id === selectedVariation)
                        ?.imageURL || item.variations[0].imageURL
                }
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
                                />
                            )}
                        </div>
                        {/* Quantity text with + and - */}
                        {checkItemInBasket() && (
                            <span className="text-charcoal flex h-max w-max items-center gap-1 text-sm">
                                <p className="font-primary w-max">
                                    Quantity:{" "}
                                    {
                                        basket.find(
                                            (i) =>
                                                i.itemID === item.id &&
                                                i.variationID ===
                                                    selectedVariation &&
                                                i.size === selectedSize
                                        )?.quantity
                                    }
                                </p>
                                <span className="flex items-center">
                                    <Icon
                                        icon="add"
                                        className="scale-75"
                                        onClick={() =>
                                            addBasketItem({
                                                itemID: item.id,
                                                variationID: selectedVariation,
                                                size: selectedSize,
                                                quantity: 1,
                                            })
                                        }
                                    />
                                    <Icon
                                        icon="remove"
                                        className="scale-75"
                                        onClick={() =>
                                            removeBasketItem({
                                                itemID: item.id,
                                                variationID: selectedVariation,
                                                size: selectedSize,
                                                quantity: 1,
                                            })
                                        }
                                    />
                                </span>
                            </span>
                        )}
                    </span>
                    {/* Item Sizes */}
                    <div className="flex items-center gap-2">
                        {eligibleSizes.map((size) => (
                            <ShopItemSize
                                size={size}
                                hasStock={
                                    (item.variations
                                        .find((v) => v.id === selectedVariation)
                                        ?.sizes.find((s) => s.size === size)
                                        ?.stock ?? 0) > 0 || false
                                }
                                selected={selectedSize === size}
                                setSelected={setSelectedSize}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-1">
                        <ShopItemName name={item.name} />
                        <ShopItemPrice price={item.priceGBP} />
                    </div>
                </div>
                {/* Add to basket button OR quantity label with + and - buttons*/}
                {!basket.find(
                    (i) =>
                        i.itemID === item.id &&
                        i.variationID === selectedVariation &&
                        i.size === selectedSize
                ) && (
                    <UIButton
                        className="text-sm sm:hidden xl:flex"
                        onClick={() =>
                            addBasketItem({
                                itemID: item.id,
                                variationID: selectedVariation,
                                size: selectedSize,
                                quantity: 1,
                            })
                        }
                    >
                        Add to Basket
                    </UIButton>
                )}
            </span>
        </div>
    );
};

export default ShopItem;
