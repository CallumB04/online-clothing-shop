import { DarkText } from "@/components/Text/DarkText";

interface ShopItemPriceProps {
    price: number;
    className?: string;
}

const ShopItemPrice: React.FC<ShopItemPriceProps> = ({ price, className }) => {
    return (
        <DarkText className={`text-sm font-semibold ${className}`}>
            £{price}
        </DarkText>
    );
};

export default ShopItemPrice;
