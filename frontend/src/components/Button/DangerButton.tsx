import Button from "./Button";

interface DangerButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const DangerButton: React.FC<DangerButtonProps> = ({
    children,
    onClick,
    disabled,
    className,
}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={`font-primary gap-2 rounded-full px-8 py-3 font-semibold text-white ${className} ${disabled ? "bg-button-primary-disabled" : "bg-danger hover:bg-danger-hover"}`}
        >
            {children}
        </Button>
    );
};

export default DangerButton;
