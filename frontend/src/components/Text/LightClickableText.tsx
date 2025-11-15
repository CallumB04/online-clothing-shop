interface LightClickableTextProps {
    children: React.ReactNode;
    underlined?: boolean;
    onClick?: () => void;
}

const LightClickableText: React.FC<LightClickableTextProps> = ({
    children,
    underlined,
    onClick,
}) => {
    return (
        <p
            className={`text-light-text font-primary hover:text-charcoal h-max w-max text-sm leading-4 transition-colors duration-200 ${onClick && "cursor-pointer"} ${underlined && "border-b-light-text hover:border-b-charcoal border-b-1"}`}
            onClick={onClick}
        >
            {children}
        </p>
    );
};

export default LightClickableText;
