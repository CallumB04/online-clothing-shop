interface ShopItemSizeProps {
    size: string;
    hasStock: boolean;
    selected: boolean;
    setSelected: (id: string) => void;
}

const ShopItemSize: React.FC<ShopItemSizeProps> = ({
    size,
    hasStock,
    selected,
    setSelected,
}) => {
    return (
        <p
            className={`bg-background border-charcoal rounded-full ${selected ? "border-2 px-[5px] py-[1px]" : "border-1 px-1.5 py-0.5"} ${hasStock && "cursor-pointer"} text-center text-xs font-semibold ${!hasStock && "line-through"}`}
            onClick={() => hasStock && setSelected(size)}
        >
            {size}
        </p>
    );
};

export default ShopItemSize;
