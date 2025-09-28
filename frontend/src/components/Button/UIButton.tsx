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
                "border-charcoal font-primary gap-2 rounded-sm border-[1px] px-2 py-1 font-light" +
                " " +
                (className ? className : "")
            }
        >
            {children}
        </Button>
    );
};

export default UIButton;
