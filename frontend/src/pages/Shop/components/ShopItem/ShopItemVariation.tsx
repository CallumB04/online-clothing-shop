import type { ItemVariation } from "../../../../api";

interface ShopItemVariationProps {
    variation: ItemVariation;
}

const ShopItemVariation: React.FC<ShopItemVariationProps> = ({ variation }) => {
    return (
        <div
            title={variation.name}
            className="bg-background border-charcoal rounded-full border-1 p-0.5"
        >
            <div
                className="size-4 rounded-full"
                style={{ backgroundColor: variation.previewColor }}
            ></div>
        </div>
    );
};

export default ShopItemVariation;
