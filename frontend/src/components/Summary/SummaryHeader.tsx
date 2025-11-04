import Icon from "../Icon/Icon";
import { DarkText } from "../Text/DarkText";

interface SummaryHeaderProps {
    text: string;
    open?: boolean;
    onClick: () => void;
}

const SummaryHeader: React.FC<SummaryHeaderProps> = ({
    text,
    open,
    onClick,
}) => {
    return (
        <span
            className={`border-input-border hover:bg-clickable-hover flex cursor-pointer justify-between border-1 p-3 transition-colors duration-200 select-none ${open ? "rounded-t border-b-0 font-medium" : "rounded"}`}
            onClick={onClick}
        >
            <DarkText className="text-sm">{text}</DarkText>
            <Icon
                icon={"chevron_right"}
                className={`text-sm transition-transform duration-300 ${open ? "rotate-90" : ""}`}
            />
        </span>
    );
};

export default SummaryHeader;
