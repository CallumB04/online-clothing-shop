interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled,
    className,
}) => {
    return (
        <button
            className={
                `${!disabled && "cursor-pointer"}` +
                " " +
                (className ? className : "")
            }
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
