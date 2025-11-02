import type { ItemVariation } from "@/api";

interface ItemPageVariationProps {
    variation: ItemVariation;
    selected: boolean;
    setSelected: (id: string) => void;
}

const ItemPageVariation: React.FC<ItemPageVariationProps> = ({
    variation,
    selected,
    setSelected,
}) => {
    return (
        <div
            title={variation.name}
            className={`bg-background border-light-text rounded-full ${selected ? "border-2 p-0.5" : "border-1 p-[3px]"} h-max w-max cursor-pointer`}
            onClick={() => setSelected(variation.id)}
        >
            <div
                className="size-10 rounded-full"
                style={{ backgroundColor: variation.previewColor }}
            ></div>
        </div>
    );
};

export default ItemPageVariation;
