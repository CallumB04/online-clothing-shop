import { Link, useLocation } from "react-router-dom";
import Icon from "../../components/Icon/Icon";

interface SidebarItemProps {
    label: string;
    category: string;
    gender: string | undefined;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    category,
    gender,
}) => {
    const location = useLocation();

    return (
        <Link
            to={
                gender
                    ? `/shop/${gender}?category=${category}`
                    : `/shop?category=${category}`
            }
            className={`flex w-full items-center justify-between rounded-md px-3 py-2 transition-shadow duration-150 hover:shadow-sm ${location.search.includes(category) && "bg-[#f3f3f3] shadow-xs"}`}
        >
            <p
                className={`font-primary text-charcoal ${location.search.includes(category) && "font-semibold"}`}
            >
                {label}
            </p>
            <Icon icon="chevron_right" />
        </Link>
    );
};

export default SidebarItem;
