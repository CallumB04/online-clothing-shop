interface WhiteTextProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
export const WhiteText: React.FC<WhiteTextProps> = ({
    children,
    className,
    onClick,
}) => {
    return (
        <p className={`font-primary text-white ${className}`} onClick={onClick}>
            {children}
        </p>
    );
};
