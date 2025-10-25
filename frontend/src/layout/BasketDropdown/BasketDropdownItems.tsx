import { useBasket } from "@/context/BasketContext";
import BasketDropdownItem from "./BasketDropdownItem";

const BasketDropdownItems = () => {
    const { basket } = useBasket();

    return (
        <div className="flex flex-col gap-1">
            {basket.map((bi) => {
                return <BasketDropdownItem basketItem={bi} />;
            })}
        </div>
    );
};

export default BasketDropdownItems;
