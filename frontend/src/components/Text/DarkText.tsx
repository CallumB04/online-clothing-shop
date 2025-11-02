interface DarkTextProps {
    children: React.ReactNode;
    className?: string;
}
export const DarkText: React.FC<DarkTextProps> = ({ children, className }) => {
    return (
        <p className={`font-primary text-charcoal ${className}`}>{children}</p>
    );
};
