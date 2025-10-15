import { capitalize } from "@/util/capitalize";
import Sidebar from "../Sidebar/Sidebar";
import ShopSidebarBreadcrumbs from "./ShopSidebarBreadcrumbs";
import ShopSidebarItem from "./ShopSidebarItem";
import ShopSidebarItems from "./ShopSidebarItems";

interface ShopSidebarProps {
    gender: string | undefined;
    category: string;
    eligibleCategories: string[];
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({
    gender,
    category,
    eligibleCategories,
}) => {
    return (
        <Sidebar>
            <ShopSidebarBreadcrumbs gender={gender} category={category} />
            <ShopSidebarItems>
                {eligibleCategories.map((c) => {
                    return (
                        <ShopSidebarItem
                            key={c}
                            label={capitalize(c)}
                            category={c}
                            gender={gender}
                        />
                    );
                })}
            </ShopSidebarItems>
        </Sidebar>
    );
};

export default ShopSidebar;
