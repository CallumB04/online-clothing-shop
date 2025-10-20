import { capitalize } from "@/util/capitalize";
import Sidebar from "../Sidebar/Sidebar";
import ShopSidebarBreadcrumbs from "./ShopSidebarBreadcrumbs";
import ShopSidebarItem from "./ShopSidebarItem";
import SidebarItems from "../Sidebar/SidebarItems";

interface ShopSidebarProps {
    isMobileSidebarOpen: boolean;
    gender: string | undefined;
    category: string;
    eligibleCategories: string[];
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({
    isMobileSidebarOpen,
    gender,
    category,
    eligibleCategories,
}) => {
    return (
        <Sidebar visibleDesktop visibleMobile={isMobileSidebarOpen}>
            <ShopSidebarBreadcrumbs gender={gender} category={category} />
            <SidebarItems>
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
            </SidebarItems>
        </Sidebar>
    );
};

export default ShopSidebar;
