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
            className={
                "bg-button-primary font-primary hover:bg-button-primary-hover gap-2 rounded-full px-8 py-3 font-semibold text-white" +
                " " +
                (className ? className : "")
            }
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;
