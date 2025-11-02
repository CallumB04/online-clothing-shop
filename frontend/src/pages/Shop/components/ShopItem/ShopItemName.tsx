import { DarkText } from "@/components/Text/DarkText";

interface ShopItemNameProps {
    name: string;
}

const ShopItemName: React.FC<ShopItemNameProps> = ({ name }) => {
    return <DarkText className="sm:text-sm">{name}</DarkText>;
};

export default ShopItemName;
