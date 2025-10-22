import { eligibleSizes, type Item } from "@/api";
import Popup from "@/components/Popup/Popup";
import PopupHeader from "@/components/Popup/PopupHeader";
import { useEffect, useState } from "react";
import ShopItemVariation from "../ShopItem/ShopItemVariation";
import ItemSize from "@/components/ItemSize/ItemSize";
import ItemImage from "@/components/ItemImage/ItemImage";
import UIButton from "@/components/Button/UIButton";

interface PreviewPopupProps {
    item: Item | null;
    closePopup: () => void;
}

const PreviewPopup: React.FC<PreviewPopupProps> = ({ item, closePopup }) => {
    const [selectedVariation, setSelectedVariation] = useState<string>("0");
    const [selectedSize, setSelectedSize] = useState<string>("XS");

    // reset selectedSize when variation changes
    useEffect(() => {
        setSelectedSize("XS");
    }, [selectedVariation]);

    return (
        <Popup closePopup={closePopup}>
            <span className="flex flex-col gap-6 sm:flex-row">
                {/* Left Side - Image of clothing item */}
                <ItemImage
                    src={
                        item?.variations.find((v) => v.id === selectedVariation)
                            ?.imageURL
                    }
                    alt={"Picture of " + item?.name}
                    className="w-80 rounded sm:w-72"
                />
                {/* Right Side - Details */}
                <div className="flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-4">
                        {/* Header -> Item Name and Price */}
                        <PopupHeader
                            title={item!.name}
                            description={`£${item!.priceGBP}`}
                            closePopup={closePopup}
                        />
                        {/* Item Variation Preview Colors */}
                        <div className="flex flex-wrap items-center gap-2 sm:max-w-[274px]">
                            {item!.variations.map((variation) => (
                                <ShopItemVariation
                                    key={variation.id}
                                    variation={variation}
                                    selected={
                                        selectedVariation === variation.id
                                    }
                                    setSelected={setSelectedVariation}
                                />
                            ))}
                        </div>
                        {/* Item Sizes */}
                        <div className="flex max-w-[274px] flex-wrap items-center gap-2">
                            {eligibleSizes.map((size) => (
                                <ItemSize
                                    size={size}
                                    selected={selectedSize === size}
                                    setSelected={setSelectedSize}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Add to Basket Button */}
                    <UIButton fullWidth>Add to Basket</UIButton>
                </div>
            </span>
        </Popup>
    );
};

export default PreviewPopup;
