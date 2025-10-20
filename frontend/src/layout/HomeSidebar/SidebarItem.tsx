import Icon from "@/components/Icon/Icon";
import { Link } from "react-router-dom";

interface SidebarItemProps {
    label: string;
    icon?: string;
    to: string;
    selected?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    icon,
    to,
    selected,
}) => {
    return (
        <Link
            to={to}
            className={`font-primary text-charcoal flex w-full items-center justify-between rounded-md px-3 py-2 transition-shadow duration-150 hover:shadow-sm ${selected && "bg-[#f3f3f3] shadow-xs"}`}
        >
            <p
                className={`font-primary text-charcoal ${selected && "font-semibold"}`}
            >
                {label}
            </p>
            {icon && <Icon icon={icon} />}
        </Link>
    );
};

export default SidebarItem;
