import { LightText } from "../Text/LightText";

interface PopupDescriptionProps {
    description: string;
    className?: string;
}

const PopupDescription: React.FC<PopupDescriptionProps> = ({
    description,
    className,
}) => {
    return (
        <LightText className={`text-left text-sm ${className}`}>
            {description}
        </LightText>
    );
};

export default PopupDescription;
