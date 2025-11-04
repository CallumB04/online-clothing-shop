import { useState } from "react";
import { DarkText } from "../Text/DarkText";
import Icon from "../Icon/Icon";
import SummaryHeader from "./SummaryHeader";
import SummaryContent from "./SummaryContent";

interface SummaryProps {
    header: string; // visible when summary is closed
    content: string; // visible underneath when summary is expanded after being clicked on
    className?: string;
}

const Summary: React.FC<SummaryProps> = ({ header, content, className }) => {
    // state if summary is open (expanded, content visible)
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col">
            <SummaryHeader
                text={header}
                open={open}
                onClick={() => setOpen(!open)}
            />
            {open && <SummaryContent text={content} open={open} />}
        </div>
    );
};

export default Summary;
