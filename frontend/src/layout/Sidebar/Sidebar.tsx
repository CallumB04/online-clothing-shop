import SidebarBreadcrumbs from "./SidebarBreadcrumbs";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
    gender: string | undefined;
    category: string;
}

const Sidebar: React.FC<SidebarProps> = ({ gender, category }) => {
    return (
        <aside className="w-sidebar-width bg-background pt-navbar-height fixed top-0 left-0 z-10 hidden h-screen border-r-1 border-r-[#eaeaea] lg:flex">
            <div className="flex w-full flex-col gap-6 p-4">
                <SidebarBreadcrumbs gender={gender} category={category} />
                <div className="flex w-full flex-col gap-2">
                    <SidebarItem label="New" category="new" gender={gender} />
                    <SidebarItem label="Tops" category="tops" gender={gender} />
                    <SidebarItem
                        label="Bottoms"
                        category="bottoms"
                        gender={gender}
                    />
                    <SidebarItem
                        label="Hoodies"
                        category="hoodies"
                        gender={gender}
                    />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
