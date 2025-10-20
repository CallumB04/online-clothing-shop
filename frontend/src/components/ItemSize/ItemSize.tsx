interface ItemSizeProps {
    size: string;
    selected: boolean;
    setSelected: (id: string) => void;
}

const ItemSize: React.FC<ItemSizeProps> = ({ size, selected, setSelected }) => {
    return (
        <p
            className={`bg-background border-charcoal rounded-full ${selected ? "border-2 px-2 py-0.5" : "border-1 px-[9px] py-[3px]"} cursor-pointer text-center text-xs font-semibold`}
            onClick={() => setSelected(size)}
        >
            {size}
        </p>
    );
};

export default ItemSize;
