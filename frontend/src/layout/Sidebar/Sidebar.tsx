import { capitalize } from "../../util/capitalize";
import SidebarBreadcrumbs from "./SidebarBreadcrumbs";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
    gender: string | undefined;
    category: string;
    eligibleCategories: string[];
}

const Sidebar: React.FC<SidebarProps> = ({
    gender,
    category,
    eligibleCategories,
}) => {
    return (
        <aside className="w-sidebar-width bg-background pt-navbar-height fixed top-0 left-0 z-10 hidden h-screen border-r-1 border-r-[#eaeaea] lg:flex">
            <div className="flex w-full flex-col gap-6 p-4">
                <SidebarBreadcrumbs gender={gender} category={category} />
                <div className="flex w-full flex-col gap-2">
                    {eligibleCategories.map((c) => {
                        return (
                            <SidebarItem
                                label={capitalize(c)}
                                category={c}
                                gender={gender}
                            />
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
