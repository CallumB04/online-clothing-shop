// export interface FooterNavigationOption = {

import { LightText } from "@/components/Text/LightText";
import { WhiteText } from "@/components/Text/WhiteText";
import { Link } from "react-router-dom";

// }

interface FooterNavigationListProps {
    header: string;
    options: { label: string; to: string }[];
}

const FooterNavigationList: React.FC<FooterNavigationListProps> = ({
    header,
    options,
}) => {
    return (
        <div className="flex flex-col gap-4 text-left">
            <WhiteText className="font-semibold tracking-wide">
                {header}
            </WhiteText>
            {/* Section options */}
            <div className="flex flex-col gap-2">
                {options.map((o) => (
                    <Link to={o.to}>
                        <LightText className="text-sm font-light transition-colors duration-200 hover:text-white">
                            {o.label}
                        </LightText>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FooterNavigationList;
