interface ClickableProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

const Clickable: React.FC<ClickableProps> = ({
    children,
    onClick,
    className,
}) => {
    return (
        <span
            className={`inline-flex items-center gap-1 p-1 ${className} clickable-hovered w-max cursor-pointer select-none`}
            onClick={onClick}
        >
            {children}
        </span>
    );
};

export default Clickable;
