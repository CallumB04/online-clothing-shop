interface IconProps {
    icon: string;
    color?: string;
    title?: string;
    className?: string;
    onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
    icon,
    color,
    title,
    className,
    onClick,
}) => {
    return (
        <i
            className={`material-symbols-outlined ${onClick && "cursor-pointer"} ${color ? color : "text-charcoal"} ${className}`}
            onClick={onClick}
            title={title}
        >
            {icon}
        </i>
    );
};

export default Icon;
