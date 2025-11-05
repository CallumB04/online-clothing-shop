interface PopupButtonsProps {
    children: React.ReactNode;
    className?: string;
}

const PopupButtons: React.FC<PopupButtonsProps> = ({ children, className }) => {
    return (
        <span className={`flex w-full flex-1 gap-2 text-sm ${className}`}>
            {children}
        </span>
    );
};

export default PopupButtons;
