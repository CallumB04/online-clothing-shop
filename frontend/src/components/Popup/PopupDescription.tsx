interface PopupDescriptionProps {
    description: string;
}

const PopupDescription: React.FC<PopupDescriptionProps> = ({ description }) => {
    return (
        <p className="font-primary text-light-text text-left text-sm">
            {description}
        </p>
    );
};

export default PopupDescription;
