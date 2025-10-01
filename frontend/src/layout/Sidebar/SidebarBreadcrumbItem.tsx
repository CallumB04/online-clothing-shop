import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";

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
                    className="h-5 scale-75"
                />
            )}
            <Link to={toLocation} className="font-light">
                {label}
            </Link>
        </span>
    );
};

export default SidebarBreadcrumbItem;
