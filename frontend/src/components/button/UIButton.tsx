import Button from "./Button";

interface UIButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const UIButton: React.FC<UIButtonProps> = ({
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
                "border-[1px] border-charcoal flex justify-center gap-2 rounded-sm px-2 py-1" +
                " " +
                (className ? className : "")
            }
        >
            {children}
        </Button>
    );
};

export default UIButton;
