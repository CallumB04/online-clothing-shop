import type { ItemVariation } from "../../../../api";

interface ShopItemVariationProps {
    variation: ItemVariation;
    selected: boolean;
    setSelected: (id: string) => void;
}

const ShopItemVariation: React.FC<ShopItemVariationProps> = ({
    variation,
    selected,
    setSelected,
}) => {
    return (
        <div
            title={variation.name}
            className={`bg-background border-charcoal rounded-full ${selected ? "border-2 p-[1px]" : "border-1 p-0.5"} h-max cursor-pointer`}
            onClick={() => setSelected(variation.id)}
        >
            <div
                className="size-3 rounded-full sm:size-4 lg:size-3 xl:size-4"
                style={{ backgroundColor: variation.previewColor }}
            ></div>
        </div>
    );
};

export default ShopItemVariation;
