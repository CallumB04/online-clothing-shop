interface ItemPageSizeProps {
    size: string;
    selected: boolean;
    setSelected: (id: string) => void;
}

const ItemPageSize: React.FC<ItemPageSizeProps> = ({
    size,
    selected,
    setSelected,
}) => {
    return (
        <p
            className={`border-light-text hover:border-charcoal font-primary flex size-12 cursor-pointer items-center justify-center rounded-full text-center text-sm font-semibold tracking-wide ${selected ? "bg-charcoal text-background!" : "bg-background text-charcoal border-2"}`}
            onClick={() => setSelected(size)}
        >
            {size}
        </p>
    );
};

export default ItemPageSize;
