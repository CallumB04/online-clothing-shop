interface ShopItemSizeProps {
    size: string;
    selected: boolean;
    setSelected: (id: string) => void;
}

const ShopItemSize: React.FC<ShopItemSizeProps> = ({
    size,
    selected,
    setSelected,
}) => {
    return (
        <p
            className={`bg-background border-charcoal rounded-full px-1.5 py-0.5 ${selected ? "border-2 p-[1px]" : "border-1 p-0.5"} cursor-pointer text-center text-xs font-semibold`}
            onClick={() => setSelected(size)}
        >
            {size}
        </p>
    );
};

export default ShopItemSize;
