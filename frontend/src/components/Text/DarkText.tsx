interface DarkTextProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
export const DarkText: React.FC<DarkTextProps> = ({
    children,
    className,
    onClick,
}) => {
    return (
        <p
            className={`font-primary text-charcoal ${className}`}
            onClick={onClick}
        >
            {children}
        </p>
    );
};
