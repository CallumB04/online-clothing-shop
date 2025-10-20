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
            <PopupHeader
                title={item!.name}
                description={`£${item!.priceGBP}`}
                closePopup={closePopup}
            />
        </Popup>
    );
};

export default PreviewPopup;
