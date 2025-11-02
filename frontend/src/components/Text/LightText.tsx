interface LightTextProps {
    children: React.ReactNode;
    className?: string;
}
export const LightText: React.FC<LightTextProps> = ({
    children,
    className,
}) => {
    return (
        <p className={`font-primary text-light-text ${className}`}>
            {children}
        </p>
    );
};
