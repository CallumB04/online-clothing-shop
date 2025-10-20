import Icon from "../Icon/Icon";
import PopupDescription from "./PopupDescription";
import PopupTitle from "./PopupTitle";

interface PopupHeaderProps {
    title?: string;
    description?: string;
    closePopup?: () => void; // if doesnt exist, X icon to close wont be rendered
}

const PopupHeader: React.FC<PopupHeaderProps> = ({
    title,
    description,
    closePopup,
}) => {
    return (
        <span className="flex w-full min-w-64 justify-between gap-12">
            <div className="flex flex-col gap-0.5">
                {title && <PopupTitle title={title} />}
                {description && <PopupDescription description={description} />}
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
