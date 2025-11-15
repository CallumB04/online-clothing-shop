import { Link } from "react-router-dom";
import Icon from "@/components/Icon/Icon";
import LightClickableText from "@/components/Text/LightClickableText";

interface SidebarBreadcrumbItemProps {
    label: string;
    toLocation: string;
    firstBreadcrumb?: boolean;
}

const SidebarBreadcrumbItem: React.FC<SidebarBreadcrumbItemProps> = ({
    label,
    toLocation,
    firstBreadcrumb,
}) => {
    return (
        <span className="font-primary flex items-center gap-1 text-sm text-[#aaa]">
            {!firstBreadcrumb && (
                <Icon
                    icon="chevron_right"
                    color="text-[#aaa]"
                    className="text-xs"
                />
            )}
            <Link to={toLocation} className="h-4.5 font-light">
                <LightClickableText>{label}</LightClickableText>
            </Link>
        </span>
    );
};

export default SidebarBreadcrumbItem;
