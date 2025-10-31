interface ShopItemPriceProps {
    price: number;
    className?: string;
}

const ShopItemPrice: React.FC<ShopItemPriceProps> = ({ price, className }) => {
    return (
        <p
            className={`font-primary text-charcoal text-sm font-semibold ${className}`}
        >
            £{price}
        </p>
    );
};

export default ShopItemPrice;
