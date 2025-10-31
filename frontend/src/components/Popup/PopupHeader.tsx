import Icon from "../Icon/Icon";
import PopupDescription from "./PopupDescription";
import PopupTitle from "./PopupTitle";

interface PopupHeaderProps {
    title?: string;
    description?: string;
    replacedDescription?: string; // crosses out description, and sits on the side (like discounted price, etc)
    closePopup?: () => void; // if doesnt exist, X icon to close wont be rendered
    className?: string;
}

const PopupHeader: React.FC<PopupHeaderProps> = ({
    title,
    description,
    replacedDescription,
    closePopup,
    className,
}) => {
    return (
        <span
            className={`flex w-full min-w-64 justify-between gap-12 ${className}`}
        >
            <div className="flex flex-col gap-0.5">
                {title && <PopupTitle title={title} />}
                <span className="flex gap-1.5">
                    {description && (
                        <PopupDescription
                            description={description}
                            className={replacedDescription && "line-through"}
                        />
                    )}
                    {replacedDescription && (
                        <PopupDescription
                            description={replacedDescription}
                            className="text-discount-text!"
                        />
                    )}
                </span>
            </div>
            {closePopup && (
                <Icon
                    icon="close"
                    className="h-max w-max"
                    onClick={closePopup}
                />
            )}
        </span>
    );
};

export default PopupHeader;
