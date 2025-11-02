interface LightTextProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
export const LightText: React.FC<LightTextProps> = ({
    children,
    className,
    onClick,
}) => {
    return (
        <p
            className={`font-primary text-light-text ${className}`}
            onClick={onClick}
        >
            {children}
        </p>
    );
};
