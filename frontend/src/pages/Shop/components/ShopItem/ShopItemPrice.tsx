interface ShopItemPriceProps {
    price: number;
}

const ShopItemPrice: React.FC<ShopItemPriceProps> = ({ price }) => {
    return (
        <p className="font-primary text-charcoal text-xs font-semibold sm:text-sm lg:text-xs xl:text-sm">
            £{price}
        </p>
    );
};

export default ShopItemPrice;
