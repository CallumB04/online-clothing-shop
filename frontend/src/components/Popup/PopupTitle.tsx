import { DarkText } from "../Text/DarkText";

interface PopupTitleProps {
    title: string;
}

const PopupTitle: React.FC<PopupTitleProps> = ({ title }) => {
    return <DarkText className="text-left text-xl font-bold">{title}</DarkText>;
};

export default PopupTitle;
