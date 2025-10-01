interface IconProps {
    icon: string;
    color?: string;
    className?: string;
    onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ icon, color, className, onClick }) => {
    return (
        <i
            className={`material-symbols-outlined ${onClick && "cursor-pointer"} ${color ? color : "text-charcoal"} ${className}`}
            onClick={onClick}
        >
            {icon}
        </i>
    );
};

export default Icon;
