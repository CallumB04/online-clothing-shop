import { fetchItemById, type BasketItem, type Item } from "@/api";
import Icon from "@/components/Icon/Icon";
import ItemImage from "@/components/ItemImage/ItemImage";
import { DarkText } from "@/components/Text/DarkText";
import { LightText } from "@/components/Text/LightText";
import { useBasket } from "@/context/BasketContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BasketDropdownItemProps {
    basketItem: BasketItem;
}

const BasketDropdownItem: React.FC<BasketDropdownItemProps> = ({
    basketItem,
}) => {
    const [item, setItem] = useState<Item | undefined>(undefined);

    const { removeBasketItem } = useBasket();

    // fetch item from api using id in basket item
    useEffect(() => {
        const fetchItem = async () => {
            const resp = await fetchItemById(basketItem.itemID);

            if (resp) {
                setItem(resp);
            }
        };

        fetchItem();
    }, []);

    return (
        <span className="flex gap-3">
            <ItemImage
                src={
                    item?.variations.find(
                        (v) => v.id === basketItem.variationID
                    )?.imageURL
                }
                className="w-16 rounded-xs"
            />
            <div className="flex flex-1 flex-col gap-1">
                <span className="flex w-full justify-between">
                    <span className="flex items-center gap-1">
                        {/* Item name */}
                        <Link to={"/item/" + item?.id}>
                            <DarkText className="text-sm">
                                {item?.name}
                            </DarkText>
                        </Link>
                        {/* Quantity text, only when greater than 1 -> "(X2)" */}
                        {basketItem.quantity > 1 && (
                            <DarkText className="text-xs">
                                ({basketItem.quantity})
                            </DarkText>
                        )}
                    </span>
                    <Icon
                        icon="close"
                        className="text-light-text hover:text-charcoal text-xs transition-colors duration-150"
                        title="Remove from Basket"
                        onClick={() => removeBasketItem(basketItem)}
                    />
                </span>
                <span className="flex gap-1 text-xs">
                    <DarkText>Color:</DarkText>
                    <DarkText className="font-light">
                        {
                            item?.variations.find(
                                (v) => v.id === basketItem.variationID
                            )?.name
                        }
                    </DarkText>
                </span>
                <span className="flex gap-1 text-xs">
                    <DarkText>Size:</DarkText>
                    <DarkText className="font-light">
                        {basketItem.size}
                    </DarkText>
                </span>
                <LightText className="text-xs">£{item?.priceGBP}</LightText>
            </div>
        </span>
    );
};

export default BasketDropdownItem;
