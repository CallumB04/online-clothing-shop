import type { Item } from "@/api";
import Popup from "@/components/Popup/Popup";

interface PreviewPopupProps {
    item: Item | null;
    closePopup: () => void;
}

const PreviewPopup: React.FC<PreviewPopupProps> = ({ item, closePopup }) => {
    return <Popup closePopup={closePopup}>{item?.name}</Popup>;
};

export default PreviewPopup;
