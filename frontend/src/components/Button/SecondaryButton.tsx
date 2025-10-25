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
            className={
                "bg-button-secondary font-secondary hover:bg-button-secondary-hover text-charcoal gap-2 rounded-full px-8 py-3 font-semibold" +
                " " +
                (className ? className : "")
            }
        >
            {children}
        </Button>
    );
};

export default SecondaryButton;
