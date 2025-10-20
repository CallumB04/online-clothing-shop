import type { Item } from "@/api";
import Popup from "@/components/Popup/Popup";
import PopupHeader from "@/components/Popup/PopupHeader";
import { useState } from "react";
import ShopItemVariation from "../ShopItem/ShopItemVariation";

interface PreviewPopupProps {
    item: Item | null;
    closePopup: () => void;
}

const PreviewPopup: React.FC<PreviewPopupProps> = ({ item, closePopup }) => {
    const [selectedVariation, setSelectedVariation] = useState<string>("0");

    return (
        <Popup closePopup={closePopup}>
            <span className="flex gap-6">
                <img
                    className="aspect-[3/4] w-72 rounded"
                    src={
                        item?.variations.find((v) => v.id === selectedVariation)
                            ?.imageURL
                    }
                    alt={"Picture of " + item?.name}
                />
                <div className="flex flex-col gap-4">
                    <PopupHeader
                        title={item!.name}
                        description={`£${item!.priceGBP}`}
                        closePopup={closePopup}
                    />
                    {/* Item Variation Preview Colors */}
                    <div className="flex max-w-[274px] flex-wrap items-center gap-2">
                        {item!.variations.map((variation) => (
                            <ShopItemVariation
                                key={variation.id}
                                variation={variation}
                                selected={selectedVariation === variation.id}
                                setSelected={setSelectedVariation}
                            />
                        ))}
                    </div>
                </div>
            </span>
        </Popup>
    );
};

export default PreviewPopup;
