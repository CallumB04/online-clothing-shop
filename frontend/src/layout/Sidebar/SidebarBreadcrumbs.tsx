import { useSearchParams } from "react-router-dom";
import SidebarBreadcrumbItem from "./SidebarBreadcrumbItem";
import { capitalize } from "../../util/capitalize";

interface SidebarBreadcrumbsProps {
    gender: string | undefined;
}

const SidebarBreadcrumbs: React.FC<SidebarBreadcrumbsProps> = ({ gender }) => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    return (
        <span className="flex items-center gap-1 px-3">
            <SidebarBreadcrumbItem
                label="Shop"
                toLocation="/shop"
                firstBreadcrumb
            />
            {gender && (
                <SidebarBreadcrumbItem
                    label={capitalize(gender)}
                    toLocation={`/shop/${gender}`}
                />
            )}
            {category && (
                <SidebarBreadcrumbItem
                    label={capitalize(category)}
                    toLocation={`/shop?category=${category}`}
                />
            )}
        </span>
    );
};

export default SidebarBreadcrumbs;
