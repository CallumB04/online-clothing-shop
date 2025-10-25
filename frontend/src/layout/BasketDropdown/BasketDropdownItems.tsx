import { useBasket } from "@/context/BasketContext";
import BasketDropdownItem from "./BasketDropdownItem";

const BasketDropdownItems = () => {
    const { basket } = useBasket();

    return (
        <div className="flex max-h-[280px] flex-col gap-3 overflow-y-scroll">
            {basket.map((bi) => {
                return (
                    <BasketDropdownItem
                        key={bi.itemID + bi.variationID + bi.size}
                        basketItem={bi}
                    />
                );
            })}
        </div>
    );
};

export default BasketDropdownItems;
