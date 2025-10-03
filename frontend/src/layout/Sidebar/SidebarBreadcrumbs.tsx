import SidebarBreadcrumbItem from "./SidebarBreadcrumbItem";
import { capitalize } from "../../util/capitalize";
import { addApostropheToGender } from "../../util/gender";

interface SidebarBreadcrumbsProps {
    gender: string | undefined;
    category: string;
}

const SidebarBreadcrumbs: React.FC<SidebarBreadcrumbsProps> = ({
    gender,
    category,
}) => {
    return (
        <span className="flex items-center gap-1 px-3">
            <SidebarBreadcrumbItem
                label="Shop"
                toLocation="/shop"
                firstBreadcrumb
            />
            {gender && (
                <SidebarBreadcrumbItem
                    label={addApostropheToGender(gender)}
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
