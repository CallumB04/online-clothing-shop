import type { Item } from "@/api";
import Popup from "@/components/Popup/Popup";

interface PreviewPopupProps {
    item: Item | null;
}

const PreviewPopup: React.FC<PreviewPopupProps> = ({ item }) => {
    return <Popup>{item?.name}</Popup>;
};

export default PreviewPopup;
