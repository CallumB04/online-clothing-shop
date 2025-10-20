import type { Item } from "@/api";
import Popup from "@/components/Popup/Popup";
import PopupHeader from "@/components/Popup/PopupHeader";

interface PreviewPopupProps {
    item: Item | null;
    closePopup: () => void;
}

const PreviewPopup: React.FC<PreviewPopupProps> = ({ item, closePopup }) => {
    return (
        <Popup closePopup={closePopup}>
            <span className="flex gap-6">
                <img
                    className="aspect-[3/4] w-72 rounded"
                    src={item?.variations[0].imageURL}
                />
                <PopupHeader
                    title={item!.name}
                    description={`£${item!.priceGBP}`}
                    closePopup={closePopup}
                />
            </span>
        </Popup>
    );
};

export default PreviewPopup;
