import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BasketDropdownItems from "./BasketDropdownItems";
import PrimaryButton from "@/components/Button/PrimaryButton";
import SecondaryButton from "@/components/Button/SecondaryButton";
import { useBasket } from "@/context/BasketContext";
import Icon from "@/components/Icon/Icon";
import BasketDropdownEmpty from "./BasketDropdownEmpty";

interface BasketDropdownProps {
    open: boolean;
    closeBasketDropdown: () => void;
}

const BasketDropdown: React.FC<BasketDropdownProps> = ({
    open,
    closeBasketDropdown,
}) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const { basket, clearBasket } = useBasket();

    const location = useLocation();
    const navigate = useNavigate();

    // managing fade in and out animations for dropdown content
    useEffect(() => {
        let timer: number;

        if (open) {
            // if dropdown open, fade in content
            setIsContentVisible(false);
            timer = window.setTimeout(() => setIsContentVisible(true), 300);
        } else {
            // if dropdown closed, hide content
            setIsContentVisible(false);
        }

        return () => {
            // before each time this useEffect runs, if a timer exists, clear it
            if (timer) clearTimeout(timer);
        };
    }, [open]);

    // hiding basket dropdown when page changes
    useEffect(() => {
        closeBasketDropdown();
    }, [location]);

    return (
        <div
            className={`top-navbar-height font-primary fixed top-[var(--navbar-height)] right-6 z-50 h-0 w-80 rounded-b-md border-t-0 border-transparent shadow-md transition-all duration-500 ${
                open && "bg-background border-layout-border h-[436px]"
            }`}
        >
            {/* Basket Content - Fades in when dropdown is opened */}
            {open && (
                <div
                    className={`flex h-full flex-col justify-between p-4 transition-opacity duration-300 ${
                        isContentVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {basket.length > 0 ? (
                        <BasketDropdownItems />
                    ) : (
                        <BasketDropdownEmpty />
                    )}
                    <div className="flex flex-col gap-2">
                        <PrimaryButton
                            className="text-sm"
                            disabled={basket.length === 0}
                            onClick={() => navigate("/checkout")}
                        >
                            Go to Checkout
                            <Icon
                                icon="arrow_right_alt"
                                className="text-sm text-white"
                            />
                        </PrimaryButton>
                        <SecondaryButton
                            className="text-sm"
                            onClick={clearBasket}
                        >
                            Clear Basket
                        </SecondaryButton>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BasketDropdown;
