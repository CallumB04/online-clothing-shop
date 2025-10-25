import { fetchItemById, type BasketItem, type Item } from "@/api";
import Icon from "@/components/Icon/Icon";
import ItemImage from "@/components/ItemImage/ItemImage";
import { useBasket } from "@/context/BasketContext";
import { useEffect, useState } from "react";

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
                    <p className="text-sm">{item?.name}</p>
                    <Icon
                        icon="close"
                        className="text-light-text hover:text-charcoal text-xs transition-colors duration-150"
                        title="Remove from Basket"
                        onClick={() => removeBasketItem(basketItem)}
                    />
                </span>
                <span className="flex gap-1 text-xs">
                    <p>Color:</p>
                    <p className="font-light">
                        {
                            item?.variations.find(
                                (v) => v.id === basketItem.variationID
                            )?.name
                        }
                    </p>
                </span>
                <span className="flex gap-1 text-xs">
                    <p>Size:</p>
                    <p className="font-light">{basketItem.size}</p>
                </span>
                <p className="text-light-text text-xs">£{item?.priceGBP}</p>
            </div>
        </span>
    );
};

export default BasketDropdownItem;
