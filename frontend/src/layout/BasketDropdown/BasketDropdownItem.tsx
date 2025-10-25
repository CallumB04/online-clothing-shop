import type { BasketItem } from "@/api";

interface BasketDropdownItemProps {
    basketItem: BasketItem;
}

const BasketDropdownItem: React.FC<BasketDropdownItemProps> = ({
    basketItem,
}) => {
    return <div>{basketItem.itemID}</div>;
};

export default BasketDropdownItem;
