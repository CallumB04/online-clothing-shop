interface LightClickableTextProps {
    text: string;
    onClick?: () => void;
}

const LightClickableText: React.FC<LightClickableTextProps> = ({
    text,
    onClick,
}) => {
    return (
        <p
            className={`text-light-text font-primary border-b-light-text hover:text-charcoal hover:border-b-charcoal border-b-1 text-sm leading-4 transition-colors duration-200 ${onClick && "cursor-pointer"}`}
            onClick={onClick}
        >
            {text}
        </p>
    );
};

export default LightClickableText;
