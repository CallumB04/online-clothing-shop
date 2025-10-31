interface PopupDescriptionProps {
    description: string;
    className?: string;
}

const PopupDescription: React.FC<PopupDescriptionProps> = ({
    description,
    className,
}) => {
    return (
        <p
            className={`font-primary text-light-text text-left text-sm ${className}`}
        >
            {description}
        </p>
    );
};

export default PopupDescription;
