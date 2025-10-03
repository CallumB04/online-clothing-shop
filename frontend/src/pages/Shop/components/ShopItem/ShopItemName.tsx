interface ShopItemNameProps {
    name: string;
}

const ShopItemName: React.FC<ShopItemNameProps> = ({ name }) => {
    return <p className="font-primary text-charcoal text-sm">{name}</p>;
};

export default ShopItemName;
