import Popup from "@/components/Popup/Popup";
import PopupHeader from "../Popup/PopupHeader";
import SecondaryButton from "../Button/SecondaryButton";
import PrimaryButton from "../Button/PrimaryButton";

interface ClearBasketPopupProps {
    closePopup: () => void;
}

const ClearBasketPopup: React.FC<ClearBasketPopupProps> = ({ closePopup }) => {
    return (
        <Popup closePopup={closePopup}>
            <PopupHeader
                title="Clear Basket"
                description="Are you sure you want to clear your basket?"
                closePopup={closePopup}
            />
            <span className="flex w-full flex-1 gap-2">
                <SecondaryButton className="w-full text-sm">
                    Cancel
                </SecondaryButton>
                <PrimaryButton className="w-full text-sm">Clear</PrimaryButton>
            </span>
        </Popup>
    );
};

export default ClearBasketPopup;
