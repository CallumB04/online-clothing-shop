import ShopSidebarBreadcrumbItem from "./ShopSidebarBreadcrumbItem";
import { capitalize } from "@/util/capitalize";
import { addApostropheToGender } from "@/util/gender";

interface ShopSidebarBreadcrumbsProps {
    gender: string | undefined;
    category: string;
}

const ShopSidebarBreadcrumbs: React.FC<ShopSidebarBreadcrumbsProps> = ({
    gender,
    category,
}) => {
    return (
        <span className="flex items-center gap-1 px-3">
            <ShopSidebarBreadcrumbItem
                label="Shop"
                toLocation="/shop"
                firstBreadcrumb
            />
            {gender && (
                <ShopSidebarBreadcrumbItem
                    label={addApostropheToGender(gender)}
                    toLocation={`/shop/${gender}`}
                />
            )}
            {category && (
                <ShopSidebarBreadcrumbItem
                    label={capitalize(category)}
                    toLocation={`/shop?category=${category}`}
                />
            )}
        </span>
    );
};

export default ShopSidebarBreadcrumbs;
