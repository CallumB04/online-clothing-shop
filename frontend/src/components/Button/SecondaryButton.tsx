import Button from "./Button";

interface SecondaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
    children,
    onClick,
    disabled,
    className,
}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={`font-secondary text-charcoal gap-2 rounded-full px-8 py-3 font-semibold ${className} ${disabled ? "bg-button-secondary-disabled" : "bg-button-secondary hover:bg-button-secondary-hover"}`}
        >
            {children}
        </Button>
    );
};

export default SecondaryButton;
