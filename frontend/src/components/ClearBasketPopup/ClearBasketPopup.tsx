import Popup from "@/components/Popup/Popup";
import PopupHeader from "../Popup/PopupHeader";
import SecondaryButton from "../Button/SecondaryButton";
import PrimaryButton from "../Button/PrimaryButton";
import { useBasket } from "@/context/BasketContext";

interface ClearBasketPopupProps {
    closePopup: () => void;
}

const ClearBasketPopup: React.FC<ClearBasketPopupProps> = ({ closePopup }) => {
    const { clearBasket } = useBasket();

    const handleClear = () => {
        clearBasket();
        closePopup();
    };

    return (
        <Popup closePopup={closePopup}>
            <PopupHeader
                title="Clear Basket"
                description="Are you sure you want to clear your basket?"
                closePopup={closePopup}
            />
            <span className="flex w-full flex-1 gap-2">
                <SecondaryButton
                    className="w-full text-sm"
                    onClick={closePopup}
                >
                    Cancel
                </SecondaryButton>
                <PrimaryButton className="w-full text-sm" onClick={handleClear}>
                    Clear
                </PrimaryButton>
            </span>
        </Popup>
    );
};

export default ClearBasketPopup;
