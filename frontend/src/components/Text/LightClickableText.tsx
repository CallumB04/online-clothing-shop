interface LightClickableTextProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const LightClickableText: React.FC<LightClickableTextProps> = ({
    children,
    onClick,
}) => {
    return (
        <p
            className={`text-light-text font-primary border-b-light-text hover:text-charcoal hover:border-b-charcoal h-max border-b-1 text-sm leading-4 transition-colors duration-200 ${onClick && "cursor-pointer"}`}
            onClick={onClick}
        >
            {children}
        </p>
    );
};

export default LightClickableText;
