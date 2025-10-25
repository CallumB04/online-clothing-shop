interface PopupButtonsProps {
    children: React.ReactNode;
}

const PopupButtons: React.FC<PopupButtonsProps> = ({ children }) => {
    return <span className="flex w-full flex-1 gap-2">{children}</span>;
};

export default PopupButtons;
