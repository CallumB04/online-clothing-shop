import { DarkText } from "../Text/DarkText";

interface SummaryContentProps {
    text: string;
    open?: boolean;
}

const SummaryContent: React.FC<SummaryContentProps> = ({ text, open }) => {
    return (
        <div className="border-input-border rounded-b border-1 p-3">
            <DarkText className="text-sm">{text}</DarkText>
        </div>
    );
};

export default SummaryContent;
