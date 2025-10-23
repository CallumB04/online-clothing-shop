import Button from "./Button";

interface UIButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    fullWidth?: boolean;
    danger?: boolean; // is button a cancel/danger button, red hover styles
}

const UIButton: React.FC<UIButtonProps> = ({
    children,
    onClick,
    disabled,
    className,
    fullWidth,
    danger,
}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={`${disabled ? "border-ui-button-disabled text-ui-button-disabled" : "border-charcoal text-charcoal"} ${!disabled && (danger ? "hover:border-danger hover:text-danger" : "hover:border-ui-button-hover hover:text-ui-button-hover")} font-primary gap-2 rounded-md border-[1px] px-2 py-1.5 transition-colors duration-150 ${fullWidth ? "w-full" : "w-max"} ${className}`}
        >
            {children}
        </Button>
    );
};

export default UIButton;
