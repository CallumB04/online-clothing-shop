import Button from "./Button";

interface UIButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    fullWidth?: boolean;
}

const UIButton: React.FC<UIButtonProps> = ({
    children,
    onClick,
    disabled,
    className,
    fullWidth,
}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={`border-charcoal text-charcoal hover:border-ui-button-hover hover:text-ui-button-hover font-primary gap-2 rounded-md border-[1px] px-2 py-1.5 transition-colors duration-150 ${fullWidth ? "w-full" : "w-max"} ${className}`}
        >
            {children}
        </Button>
    );
};

export default UIButton;
