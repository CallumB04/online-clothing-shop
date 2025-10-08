interface ShopItemPriceProps {
    price: number;
}

const ShopItemPrice: React.FC<ShopItemPriceProps> = ({ price }) => {
    return (
        <p className="font-primary text-charcoal text-sm font-semibold">
            £{price}
        </p>
    );
};

export default ShopItemPrice;
