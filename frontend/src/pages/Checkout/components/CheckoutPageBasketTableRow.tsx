import { fetchItemById, type Item, type BasketItem } from "@/api";
import Icon from "@/components/Icon/Icon";
import ItemImage from "@/components/ItemImage/ItemImage";
import { DarkText } from "@/components/Text/DarkText";
import { LightText } from "@/components/Text/LightText";
import { useBasket } from "@/context/BasketContext";
import { useEffect, useMemo, useState } from "react";

interface CheckoutPageBasketTableRowProps {
    basketItem: BasketItem;
}

const CheckoutPageBasketTableRow: React.FC<CheckoutPageBasketTableRowProps> = ({
    basketItem,
}) => {
    const [item, setItem] = useState<Item | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { removeBasketItem } = useBasket();

    // fetching item from basket item
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const resp = await fetchItemById(basketItem.itemID);
            if (resp) {
                setItem(resp);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [basketItem]);

    // get info of variation of item in the basket
    // saves needing to re-iterate through every time variation data is needed
    const itemVariation = useMemo(
        () => item?.variations.find((v) => v.id),
        [item]
    );

    return (
        <span className="flex items-center gap-4">
            {/* Item image, name and variation */}
            <span className="flex w-full items-center gap-4 px-2">
                <ItemImage
                    src={itemVariation?.imageURL}
                    className="w-16 rounded"
                />
                <div className="flex flex-col gap-0.5">
                    <DarkText className="font-semibold">{item?.name}</DarkText>
                    <LightText className="text-sm font-light">
                        {itemVariation?.name}
                    </LightText>
                </div>
            </span>
            {/* Size */}
            <span className="w-80"></span>
            {/* Quantity */}
            <span className="w-80"></span>
            {/* Total */}
            <span className="w-52"></span>
            {/* Item removal */}
            <span className="w-24">
                <Icon
                    icon="close"
                    className="text-light-text hover:text-charcoal mx-auto text-xs transition-colors duration-150"
                    title="Remove from Basket"
                    onClick={() => removeBasketItem(basketItem)}
                />
            </span>
        </span>
    );
};

export default CheckoutPageBasketTableRow;
