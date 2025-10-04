import { capitalize } from "../../util/capitalize";
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
        <aside className="w-sidebar-width bg-background pt-navbar-height fixed top-0 left-0 z-10 hidden h-screen border-r-1 border-r-[#eaeaea] lg:flex">
            <div className="flex w-full flex-col gap-6 p-4">
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
            </div>
        </aside>
    );
};

export default ShopSidebar;
