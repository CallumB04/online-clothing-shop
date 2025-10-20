import { capitalize } from "@/util/capitalize";
import Sidebar from "../Sidebar/Sidebar";
import ShopSidebarBreadcrumbs from "./ShopSidebarBreadcrumbs";
import SidebarItems from "../Sidebar/SidebarItems";
import SidebarItem from "../Sidebar/SidebarItem";

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
                        <SidebarItem
                            key={c}
                            label={capitalize(c)}
                            icon="chevron_right"
                            to={
                                gender
                                    ? `/shop/${gender}?category=${c}`
                                    : `/shop?category=${c}`
                            }
                            selected={category === c}
                        />
                    );
                })}
            </SidebarItems>
        </Sidebar>
    );
};

export default ShopSidebar;
