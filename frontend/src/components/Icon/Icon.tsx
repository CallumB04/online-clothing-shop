interface IconProps {
    icon: string;
    onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ icon, onClick }) => {
    return (
        <i
            className={`material-symbols-outlined ${onClick && "cursor-pointer"} text-charcoal`}
            onClick={onClick}
        >
            {icon}
        </i>
    );
};

export default Icon;
