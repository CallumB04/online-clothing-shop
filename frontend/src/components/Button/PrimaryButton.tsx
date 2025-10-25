import Button from "./Button";

interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    onClick,
    disabled,
    className,
}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={`font-primary gap-2 rounded-full px-8 py-3 font-semibold text-white ${className} ${disabled ? "bg-button-primary-disabled" : "bg-button-primary hover:bg-button-primary-hover"}`}
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;
