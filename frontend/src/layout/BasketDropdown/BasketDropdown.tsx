import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BasketDropdownItems from "./BasketDropdownItems";

interface BasketDropdownProps {
    open: boolean;
    closeBasketDropdown: () => void;
}

const BasketDropdown: React.FC<BasketDropdownProps> = ({
    open,
    closeBasketDropdown,
}) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const location = useLocation();

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
            className={`top-navbar-height font-primary fixed right-6 z-50 h-0 w-72 rounded-b-md border-t-0 border-transparent shadow-md transition-all duration-500 ${
                open && "bg-background border-layout-border h-96"
            }`}
        >
            {/* Basket Content - Fades in when dropdown is opened */}
            {open && (
                <div
                    className={`flex flex-col p-4 transition-opacity duration-300 ${
                        isContentVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <BasketDropdownItems />
                </div>
            )}
        </div>
    );
};

export default BasketDropdown;
