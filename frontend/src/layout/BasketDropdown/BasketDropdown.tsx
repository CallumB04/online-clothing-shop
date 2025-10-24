interface BasketDropdownProps {
    open: boolean;
}

const BasketDropdown: React.FC<BasketDropdownProps> = ({ open }) => {
    return (
        <div
            className={`top-navbar-height font-primary fixed right-6 z-99 h-0 w-72 rounded-b-md border-1 border-t-0 border-transparent shadow-md transition-all duration-300 ${open && "bg-background border-layout-border h-96"}`}
        >
            {/* Content of basket, only visible when open */}
            {open && (
                <div
                    className={`p-4 opacity-0 transition-opacity duration-300 ${open && "opacity-100"}`}
                >
                    Basket Content
                </div>
            )}
        </div>
    );
};

export default BasketDropdown;
